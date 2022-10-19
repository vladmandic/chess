import * as log from '@vladmandic/pilogger';
import { SFProcess, SFWasm, fatal } from './engine';

export type EngineType = 'process' | 'wasm';
export type ScoreType = 'cp' | 'mate' | 'lowerbound' | 'upperbound' | 'notfound' | 'syzygy';
export type State = 'starting' | 'started' | 'stopping' | 'ready' | 'busy' | 'terminated';

export interface Options {
  debug: boolean;
  verbose: boolean;
  lines: number;
  depth: number;
  maxTime: number;
  engine: string;
  type: EngineType;
  nnue: string;
  syzygy: string;
  maxScore: number;
  options: string[];
}

export interface UCIResult {
  name: string, info: string[], options: Options | undefined, time: number
}

export class Score {
  score: number;
  moves: number;
  type: ScoreType;

  constructor(score: number, type: ScoreType, moves: number) {
    this.score = score;
    if (type === 'syzygy' || type === 'mate') this.score = 100 - this.score;
    this.moves = moves;
    this.type = type;
  }

  toString() {
    switch (this.type) {
      case 'cp': return this.score;
      case 'syzygy': return `solved score ${this.moves}`;
      case 'mate': return `mate in ${this.moves}`;
      case 'lowerbound': return `>= ${this.score}`;
      case 'upperbound': return `<= ${this.score}`;
      default: return '';
    }
  }
}

export interface Line {
  depth: number,
  score: Score,
  moves: string[],
  nodes: number,
  tb: number,
}

export interface Analysis {
  time: number,
  depth: number,
  lines: Line[],
  noLegalMoves?: boolean,
}

export class Engine {
  private instance;
  private timeout: NodeJS.Timeout | undefined; // eslint-disable-line no-undef
  private startTime: bigint = process.hrtime.bigint();
  private noMoves: boolean = false;
  private lines: Map<number, Line[]> = new Map();
  private depth = 0;
  private turn: undefined | 'white' | 'black';
  private engineOptions: string[] = [];
  private duration = 0;
  private lastFen: string = '';
  private lastReady: bigint = 0n;
  syzygy: { wdl: string | undefined, dtz: number | undefined } = { wdl: undefined, dtz: undefined };
  name: string | undefined;
  info: string[] = [];
  options: Options = { lines: 1, depth: 10, maxTime: 0, engine: '', nnue: '', syzygy: '', debug: false, verbose: true, maxScore: 10, options: [], type: 'process' };
  state: State;

  constructor(options: Partial<Options>) {
    this.state = 'starting';
    if (options?.depth) this.options.depth = options.depth;
    if (options?.lines) this.options.lines = options.lines;
    if (options?.maxTime) this.options.maxTime = options.maxTime;
    if (options?.debug) this.options.debug = options.debug;
    if (options?.engine) this.options.engine = options.engine;
    if (options?.syzygy) this.options.syzygy = options.syzygy;
    if (options?.nnue) this.options.nnue = options.nnue;
    if (options?.options) this.options.options = options.options;
    if (options?.type) this.options.type = options.type;
    this.instance = this.options.type === 'process'
      ? new SFProcess(this, this.processLine)
      : new SFWasm(this, this.processLine);
  }

  async init() {
    await this.instance.init();
    this.instance.send('compiler');
    this.instance.send('uci');
    this.instance.send('setoption name UCI_AnalyseMode value true');
    this.instance.send('setoption name Ponder value false');
    if (this.options.nnue.length > 0) {
      this.instance.send(`setoption name EvalFile value ${this.options.nnue}`);
      this.instance.send('setoption name Use NNUE value true');
    } else {
      this.instance.send('setoption name Use NNUE value false');
    }
    if (this.options.syzygy.length > 0) this.instance.send(`setoption name SyzygyPath value ${this.options.syzygy}`);
    if (this.options.lines > 1) this.instance.send(`setoption name MultiPV value ${this.options.lines}`);
    for (const option of this.options.options) this.instance.send(`setoption name ${option}`);
    this.instance.send('go depth 1');
    this.instance.send('stop');
    this.reset();
    await this.ready();
  }

  async reset() {
    this.startTime = process.hrtime.bigint();
    this.duration = 0;
    this.lines = new Map();
    this.depth = 0;
    this.noMoves = false;
    this.state = 'busy';
    this.instance.send('stop');
    this.instance.send('ucinewgame');
    this.instance.send('position startpos');
    this.instance.send('isready');
    await this.ready();
  }

  async ready(): Promise<boolean> {
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (this.state === 'ready' && this.name) {
          this.lastReady = process.hrtime.bigint();
          clearInterval(interval);
          resolve(true);
        }
        if (this.lastReady > 0n && (Number(process.hrtime.bigint() - this.lastReady) / 1000 / 1000) > (2 * this.options.maxTime)) { // sometimes engine may not respond to initial stop
          if (this.options.debug) log.warn('uci ready timeout:', Number(process.hrtime.bigint() - this.lastReady) / 1000 / 1000);
          this.instance.send('stop');
          this.instance.send('isready');
        }
        if (this.lastReady > 0n && (Number(process.hrtime.bigint() - this.lastReady) / 1000 / 1000) > (10000)) {
          if (this.options.debug) log.warn('uci ready abort:', Number(process.hrtime.bigint() - this.lastReady) / 1000 / 1000);
          fatal('engine process unresponsive');
        }
      }, 1);
    });
  }

  set fen(fenString: string) {
    this.lastFen = fenString;
    this.noMoves = false;
    this.instance.send(`position fen ${fenString}`);
    this.turn = fenString.split(' ')[1] === 'b' ? 'black' : 'white';
  }

  get fen() {
    return this.lastFen;
  }

  get validOptions() {
    return this.engineOptions;
  }

  set move(movesString: string) {
    this.instance.send(`position startpos moves ${movesString}`);
    this.turn = movesString.split(' ').length % 2 ? 'black' : 'white';
  }

  async stop() {
    this.instance.send('stop');
    this.state = 'stopping';
    await this.ready();
  }

  async play(fen: string): Promise<Analysis> {
    this.fen = fen;
    this.state = 'busy';
    this.startTime = process.hrtime.bigint();
    this.lines = new Map();
    this.depth = 0;
    if (this.timeout) clearTimeout(this.timeout);
    if (this.options.maxTime && this.options.maxTime > 0) this.timeout = setTimeout(() => this.instance.send('stop'), this.options.maxTime);
    if (this.options.depth > 0) this.instance.send(`go depth ${this.options.depth}`);
    else this.instance.send('go infinite');
    await this.ready();
    return this.analysis;
  }

  async solve(): Promise<{ wdl: string, dtz?: number } | undefined> {
    this.state = 'busy';
    this.instance.send('d');
    this.instance.send('isready');
    await this.ready();
    const res = this.syzygy.wdl ? { wdl: this.syzygy.wdl || '' } : undefined;
    if (this.syzygy.dtz && res) res['dtz'] = this.syzygy.dtz;
    return res;
  }

  get analysis(): Analysis {
    if (this.noMoves) return { depth: 0, time: 0, lines: [{ score: { type: 'mate', score: 0, moves: 0 }, nodes: 0, tb: -1, depth: 0, moves: [] }] };
    const lines: Line[] = [];
    for (let i = this.depth; i >= this.depth - 1; i--) {
      const linesAtDepth = (this.lines.get(i) || []).filter((line) => line);
      for (let j = 0; j < linesAtDepth.length; j++) {
        if (lines.findIndex((l) => l.moves[0] === linesAtDepth[j].moves[0]) === -1) lines.push(linesAtDepth[j]);
      }
    }
    if (lines.length > this.options.lines) lines.length = this.options.lines;
    // const lines: Line[] = allLines.sort((a, b) => (2 * b.depth + b.score.score) - (2 * a.depth + a.score.score));
    if (lines.length > this.depth / 2) lines.length = Math.trunc(this.depth / 2);
    return { depth: this.depth, time: this.duration, lines };
  }

  terminate() {
    if (this.instance) this.instance.exit();
  }

  processSolve(infoLine: string) {
    const words = infoLine.split(' ').map((word) => word.trim()).filter((word) => word);
    const idx = (s) => words.findIndex((w) => w === s) + 1;
    const str = (s) => (idx(s) > 0 ? words[idx(s)] : undefined);
    const num = (s) => Number(str(s));
    const wdl = str('WDL:');
    const dtz = num('DTZ:');
    if (this.options.debug) log.debug('uci solve:', { wdl, dtz });
    if (wdl) this.syzygy.wdl = wdl;
    if (dtz) this.syzygy.dtz = dtz;
  }

  processInfo(infoLine: string) {
    const info = infoLine.replace('info string ', '').replace('Compiled by', '').trim();
    if (info.startsWith('time')) return;
    if (!this.info.includes(info)) this.info.push(info);
    if (this.options.debug) log.debug('uci info:', { info });
  }

  processData(infoLine: string) {
    if (infoLine.includes('mate 0')) this.noMoves = true;
    if (infoLine.includes('currmove')) return;
    if (infoLine.indexOf(' score ') === -1 || infoLine.indexOf(' depth ') === -1) return;
    if (this.noMoves) return;
    const words = infoLine.split(' ').map((word) => word.trim());
    const idx = (s) => words.findIndex((w) => w === s) + 1;
    const str = (s) => words[idx(s)];
    const num = (s) => Number(str(s));
    // Parse the depth of the stockfish output.
    // const depth = Math.max(num('seldepth') || 0, num('depth') || 0);
    const depth = num('depth') || 0;
    const pv = num('multipv') || 1;
    const tb = num('tbhits') || 0;
    const nodes = num('nodes') || 0;
    const scoreType = str('score') as ScoreType;
    const scoreVal = Number(words[idx('score') + 1]) || 0;
    // Parse the score of the stockfish output.
    let score: Score | undefined;
    switch (scoreType) {
      case 'cp': score = new Score(scoreVal / 100, 'cp', 0); break;
      case 'lowerbound': score = new Score(scoreVal / 100, 'lowerbound', 0); break;
      case 'upperbound': score = new Score(scoreVal / 100, 'upperbound', 0); break;
      case 'mate': score = new Score(scoreVal, 'mate', scoreVal); break;
      default: fatal(`engine parse error: ${infoLine}`);
    }
    if (!score) return;
    // clearTimeout(this.timeout);
    if (this.turn === 'black') score.score *= -1;
    const moves = words.slice(idx('pv'));
    const line: Line = { score, moves, depth, nodes, tb };
    const lines: Line[] = this.lines.get(depth) || new Array(this.options.lines);
    lines[pv - 1] = line;
    this.lines.set(depth, lines);
    if (depth > this.depth) this.depth = depth;
    if (this.options.debug) log.debug('uci parse:', { depth, score: lines[0].score, move: lines[0].moves[0], nodes: lines[0].nodes, tb: lines[0].tb });
  }

  processLine(line: string, that: Engine) {
    if (!that) that = this; // eslint-disable-line @typescript-eslint/no-this-alias
    if (line.startsWith('id name')) that.name = line.replace('id name ', '');
    if (line.startsWith('option')) that.engineOptions.push(line.replace('option name ', ''));
    if (line.startsWith('uciok')) that.state = 'started';
    if (line.startsWith('Tablebases')) that.processSolve(line);
    if (line.startsWith('info string') || line.startsWith('Compiled')) that.processInfo(line);
    if (line.startsWith('info depth')) that.processData(line);
    if (line.startsWith('readyok') || line.startsWith('bestmove') || line.startsWith('error')) {
      that.duration = Number((process.hrtime.bigint() - that.startTime) / 1000n / 1000n);
      that.lastReady = process.hrtime.bigint();
      that.state = 'ready';
    }
    // if (this.state !== 'ready' && this.state !== 'busy') continue;
  }
}

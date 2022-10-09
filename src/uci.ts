import * as log from '@vladmandic/pilogger';
import { spawn, ChildProcess } from 'child_process';
import { existsSync, statSync } from 'fs';

export type State = 'starting' | 'started' | 'stopping' | 'ready' | 'busy' | 'terminated';

export interface Options {
  debug: boolean;
  lines: number;
  depth: number;
  maxTime: number;
  engine: string;
  nnue: string;
  syzygy: string;
  maxScore: number;
  options: string[];
}

export type ScoreType = 'cp' | 'mate' | 'lowerbound' | 'upperbound' | 'notfound' | 'syzygy';

export interface UCIResult {
  name: string, info: string[], options: Options | undefined, time: number
}

export class Score {
  score: number; // The score for the analysis.
  type: ScoreType; // Type of the score.

  constructor(score: number, type: ScoreType) {
    this.score = score;
    this.type = type;
  }

  toString() {
    switch (this.type) {
      case 'cp': return this.score;
      case 'syzygy': return `solved score ${this.score}`;
      case 'mate': return `mate in ${this.score}`;
      case 'lowerbound': return `>= ${this.score}`;
      case 'upperbound': return `<= ${this.score}`;
      default: return '';
    }
  }
}

export interface Line {
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
  private instance: ChildProcess;
  private buffer: Buffer;
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
  private ascii: string[] = [];
  syzygy: { wdl: string | undefined, dtz: number | undefined } = { wdl: undefined, dtz: undefined };
  name: string | undefined;
  info: string[] = [];
  options: Options = { lines: 1, depth: 10, maxTime: 0, engine: '', nnue: '', syzygy: '', debug: false, maxScore: 10, options: [] };
  state: State;

  constructor(options: Partial<Options>) {
    if (options?.depth) this.options.depth = options.depth;
    if (options?.lines) this.options.lines = options.lines;
    if (options?.maxTime) this.options.maxTime = options.maxTime;
    if (options?.debug) this.options.debug = options.debug;
    if (options?.engine) this.options.engine = options.engine;
    if (options?.syzygy) this.options.syzygy = options.syzygy;
    if (options?.nnue) this.options.nnue = options.nnue;
    if (options?.options) this.options.options = options.options;

    if (!existsSync(this.options.engine)) throw new Error(`uci: engine not found: ${this.options.engine}`);
    if (!statSync(this.options.engine).isFile()) throw new Error(`uci: engine not valid: ${this.options.engine}`);
    this.instance = spawn(this.options.engine);
    this.buffer = Buffer.alloc(0); // Initialise the output buffer.
    this.instance.stdout?.on('data', (chunk: Buffer) => { // Handle the output of the Stockfish process.
      if (this.options.debug) log.data('uci', { stdout: chunk.toString() }); // .toString());
      chunk = Buffer.concat([this.buffer, chunk]); // Prepend the previous buffer to the chunk.
      const lastNewline = chunk.lastIndexOf('\n'); // If the last line doesn't end with a newline, buffer the data until we get a newline.
      if (lastNewline !== chunk.length - 1) this.buffer = chunk.slice(lastNewline + 1);
      else this.buffer = Buffer.alloc(0);
      this.process(chunk.slice(0, lastNewline).toString()); // Process all data that is ready.
    });
    this.send('compiler');
    this.send('uci');
    this.send('setoption name UCI_AnalyseMode value true');
    this.send('setoption name Ponder value false');
    if (this.options.nnue.length > 0) {
      this.send(`setoption name EvalFile value ${this.options.nnue}`);
      this.send('setoption name Use NNUE value true');
    } else {
      this.send('setoption name Use NNUE value false');
    }
    for (const option of this.options.options) {
      this.send(`setoption name ${option}`);
    }
    if (this.options.syzygy.length > 0) {
      this.send(`setoption name SyzygyPath value ${this.options.syzygy}`);
    }
    this.send('go depth 1'); // to capture initial engine output
    this.send('stop');
    this.send('isready');
    this.state = 'starting';
    this.reset();
  }

  async reset() {
    this.startTime = process.hrtime.bigint();
    this.duration = 0;
    this.lines = new Map();
    this.depth = 0;
    this.noMoves = false;
    this.ascii = [];
    this.state = 'busy';
    this.send('stop');
    this.send('ucinewgame');
    this.send('position startpos');
    // this.send('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR b - - 0 1');
    this.send('isready');
    await this.ready();
  }

  async ready(): Promise<boolean> {
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (this.state === 'ready' || this.state === 'terminated') {
          this.lastReady = process.hrtime.bigint();
          clearInterval(interval);
          resolve(true);
        }
        if (this.lastReady > 0n && Number(process.hrtime.bigint() - this.lastReady) / 1000 / 1000 > 2 * this.options.maxTime) { // sometimes engine may not respond to initial stop
          this.send('stop');
          this.send('isready');
        }
      }, 5);
    });
  }

  set fen(fenString: string) {
    this.lastFen = fenString;
    this.noMoves = false;
    this.send(`position fen ${fenString}`);
    this.turn = fenString.split(' ')[1] === 'b' ? 'black' : 'white';
  }

  get fen() {
    return this.lastFen;
  }

  get validOptions() {
    return this.engineOptions;
  }

  set move(movesString: string) {
    this.send(`position startpos moves ${movesString}`);
    this.turn = movesString.split(' ').length % 2 ? 'black' : 'white';
  }

  start(options?: Partial<Options>) {
    this.state = 'busy';
    this.startTime = process.hrtime.bigint();
    this.lines = new Map();
    this.depth = 0;
    if (options?.depth && options?.depth > 0) this.options.depth = options.depth;
    if (options?.lines && options?.lines > 0) this.options.lines = options.lines;
    if (options?.maxTime && options?.maxTime > 0) this.options.maxTime = options.maxTime;
    if (this.options.lines > 1) this.send(`setoption name MultiPV value ${this.options.lines}`);
    if (this.options.depth > 0) this.send(`go depth ${this.options.depth}`);
    else this.send('go infinite');
    if (this.timeout) clearTimeout(this.timeout);
    if (this.options.maxTime && this.options.maxTime > 0) this.timeout = setTimeout(() => this.send('stop'), this.options.maxTime);
  }

  async stop() {
    this.send('stop');
    this.state = 'stopping';
    await this.ready();
  }

  async board(): Promise<string> {
    this.ascii = [];
    this.state = 'busy';
    this.send('d');
    this.send('isready');
    await this.ready();
    return this.ascii.join('\n');
  }

  async play(fen: string): Promise<Analysis> {
    this.fen = fen;
    this.start();
    await this.ready();
    return this.best;
  }

  async solve(): Promise<{ wdl: string, dtz?: number } | undefined> {
    await this.board();
    const res = this.syzygy.wdl ? { wdl: this.syzygy.wdl || '' } : undefined;
    if (this.syzygy.dtz && res) res['dtz'] = this.syzygy.dtz;
    return res;
  }

  process(chunk: string) {
    const lines = chunk
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
    for (const line of lines) {
      if (line.startsWith('id name')) this.name = line.replace('id name ', '');
      if (line.startsWith('option')) this.engineOptions.push(line.replace('option name ', ''));
      if (line.startsWith('uciok')) this.state = 'started';
      if (line.startsWith('readyok') || line.startsWith('bestmove') || line.startsWith('error')) {
        this.duration = Number((process.hrtime.bigint() - this.startTime) / 1000n / 1000n);
        this.state = 'ready';
      }
      if (this.state !== 'ready' && this.state !== 'busy') continue;
      if (line.startsWith('info')) {
        if (line.includes(' pv ')) {
          this.processInfo(line);
        } else if (line.includes('mate 0') || line.includes('cp 0')) {
          this.noMoves = true;
        } else if (line.startsWith('info string')) {
          const info = line.replace('info string ', '');
          if (!this.info.includes(info)) this.info.push(info);
        } else if (line.includes('currmove')) {
          continue;
        } else {
          // log.data('uci: unknown line', { line });
        }
      }
      if (line.startsWith('Tablebases')) {
        this.processSolve(line);
      }
      if (line.startsWith('|' || line.startsWith('+'))) {
        const l = line.replace(/[1-8,|]/g, '');
        this.ascii.push(l);
      }
      if (line.startsWith('Compil')) {
        const info = line.replace('Compiled by', '').replace('Compilation settings include:', '').trim();
        if (!this.info.includes(info)) this.info.push(info);
      }
    }
  }

  processSolve(infoLine: string) {
    const words = infoLine.split(' ').map((word) => word.trim()).filter((word) => word);
    const idx = (s) => words.findIndex((w) => w === s) + 1;
    const str = (s) => (idx(s) > 0 ? words[idx(s)] : undefined);
    const num = (s) => Number(str(s));
    const wdl = str('WDL:');
    const dtz = num('DTZ:');
    if (wdl) this.syzygy.wdl = wdl;
    if (dtz) this.syzygy.dtz = dtz;
  }

  processInfo(infoLine: string) {
    if (infoLine.indexOf(' score ') === -1 || infoLine.indexOf(' depth ') === -1) return; // The line does not contain any analysis data. We will ignore it.
    const words = infoLine.split(' ').map((word) => word.trim());
    const idx = (s) => words.findIndex((w) => w === s) + 1;
    const str = (s) => words[idx(s)];
    const num = (s) => Number(str(s));
    // Parse the depth of the stockfish output.
    const depth = num('seldepth') || num('depth') || 0;
    const pv = num('multipv') || 1;
    const tb = num('tbhits') || 0;
    const nodes = num('nodes') || 0;
    const scoreType = str('score') as ScoreType;
    const scoreVal = Number(words[idx('score') + 1]) || 0;
    // Parse the score of the stockfish output.
    let score: Score | undefined;
    switch (scoreType) {
      case 'cp': score = new Score(scoreVal / 100, 'cp'); break;
      case 'lowerbound': score = new Score(scoreVal / 100, 'lowerbound'); break;
      case 'upperbound': score = new Score(scoreVal / 100, 'upperbound'); break;
      case 'mate': score = new Score(scoreVal, 'mate'); break;
      default: log.data('uci: unknown score type', { scoreType });
    }
    if (!score) return;
    if (this.turn === 'black') score.score *= -1;
    const moves = words.slice(idx('pv'));
    const line: Line = { score, moves, nodes, tb };
    const lines: Line[] = this.lines.get(depth) || new Array(this.options.lines);
    lines[pv - 1] = line;
    this.lines.set(depth, lines);
    if (depth > this.depth) this.depth = depth;
  }

  get best(): Analysis {
    if (this.noMoves) return { depth: 0, time: 0, lines: [{ score: { type: 'mate', score: 0 }, nodes: 0, tb: 0, moves: [] }] };
    const lines = this.lines.get(this.depth) || [];
    return { depth: this.depth, time: this.duration, lines: lines.filter((line) => line) };
  }

  send(str: string) {
    const ok = this.instance?.stdin?.writable && !this.instance.exitCode;
    if (!ok) {
      log.error('uci: send failed', { pid: this.instance?.pid, command: str, code: this.instance?.exitCode, killed: this.instance?.killed, signal: this.instance?.signalCode });
      this.state = 'terminated';
    } else {
      this.instance?.stdin?.write(`${str}\n`);
    }
  }

  terminate() {
    this.state = 'terminated';
    if (this.instance.exitCode) return; // already exited
    this.send('stop');
    this.send('quit');
    setTimeout(() => this.instance.kill('SIGTERM'), 10);
    setTimeout(() => this.instance.kill('SIGKILL'), 100);
    setTimeout(() => {
      if (this.options.debug) log.data('engine exit', { code: this.instance.exitCode, signal: this.instance.signalCode });
    }, 200);
  }
}

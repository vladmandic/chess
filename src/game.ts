import * as log from '@vladmandic/pilogger';
import { pgnRead } from 'kokopu';
import type { UCI, UCIOptions } from './uci';

export class Move {
  i: number;
  move: string;
  best: string = '';
  score: number = 0;
  cpl: number = 0;
  color: string;
  symbol: string;
  fen: string;
  flags: string | undefined;

  constructor(node) {
    this.i = node?.fullMoveNumber();
    this.symbol = node?.figurineNotation();
    this.move = `${node?._data.moveDescriptor.from()}${node?._data.moveDescriptor.to()}`; // eslint-disable-line no-underscore-dangle
    this.color = node?.moveColor();
    this.fen = node?.position().fen();
    this.flags = undefined;
  }
}

export class Game {
  file: string | undefined;
  game: number;
  moves: number;
  date: Date | undefined;
  analyzed: Date | undefined;
  players: [string, string];
  result: string | undefined;
  win: boolean | undefined;
  line: Move[];
  color: 'white' | 'black' | undefined;
  acpl: number | undefined;
  pgn: string[] = [];
  engine: { name: string, info: string[], options: UCIOptions | undefined, time: number } = { name: '', info: [], options: undefined, time: 0 };
  summary: { amazing: number, great: number, good: number, bad: number, mistake: number, blunder: number } = { amazing: 0, great: 0, good: 0, bad: 0, mistake: 0, blunder: 0 };

  constructor(data?: Partial<Game>) {
    this.analyzed = new Date();
    this.file = data?.file;
    this.game = data?.game || 0;
    this.moves = data?.moves || 0;
    this.date = data?.date;
    this.players = data?.players || ['', ''];
    this.line = data?.line || [];
    this.color = data?.color;
    this.acpl = data?.acpl || 0;
    if (data?.pgn) this.pgn = data.pgn;
    if (data?.engine) this.engine = data.engine;
  }
}

const getACPL = (game: Game): number | undefined => {
  // only look at player moves and don't look at moves once game is decided
  if (!game.color) return undefined;
  const meaningfullMoves = game.line.filter((move) => Math.abs(move.score) > 0 && Math.abs(move.score) < 10 && game.color?.startsWith(move.color));
  const acpl = Math.round(100 * meaningfullMoves.reduce((prev, curr) => prev += Math.abs(curr.cpl), 0) / meaningfullMoves.length);
  return acpl;
  // return acpl * (game.color === 'white' ? 1 : -1);
};

const getFlags = (move: Move) => {
  if (move.flags) return move.flags;
  if (Math.abs(move.score) > 10) return undefined;
  if (move.cpl > 3.0) return 'blunder';
  if (move.cpl > 1.0) return 'mistake';
  if (move.cpl > 0.5) return 'bad';
  if (move.cpl > 0.2) return 'good';
  if (move.cpl > 0.1) return 'great';
  if (move.cpl < -0.1) return 'amazing';
  return 'best';
};

export async function processPGN(engine: UCI, pgnText: string, pgnFile: string, playerName?): Promise<Game[]> {
  const database = pgnRead(pgnText);
  const games: Game[] = [];
  for (let i = 0; i < database.gameCount(); i++) { // pgn can contain multiple games
    const t0 = process.hrtime.bigint();
    let pgnGame;
    try {
      pgnGame = database.game(i);
    } catch (err) {
      continue;
    }
    const players: [string, string] = [pgnGame.playerName('w') || '', pgnGame.playerName('b') || ''];
    let color;
    if (players[0] === playerName) color = 'white';
    if (players[1] === playerName) color = 'black';
    const variation = pgnGame.mainVariation(); // game can have multiple variations but we only look at played variation
    const nodes = variation.nodes(); // array of moves
    const game = new Game({
      file: pgnFile,
      game: i + 1,
      moves: Math.round(nodes.length / 2),
      date: pgnGame.dateAsDate(),
      players,
      color,
      pgn: pgnText.split('\n'),
      engine: { name: engine.name, info: engine.info, options: engine.options, time: 0 },
    });
    game.result = pgnGame.result();
    if (color === 'white') game.win = game.result === '1-0';
    if (color === 'black') game.win = game.result === '0-1';
    await engine.reset(); // reset engine
    for (let j = 0; j <= nodes.length; j++) { // analyze all moves
      // if (j > 10) continue;
      const move = new Move(nodes[j]); // create played move
      if (j > 0) {
        const prev = move.i ? new Move(nodes[j].previous()) : new Move(nodes[j - 1]); // run analysis as it was before move is played
        if (prev.fen) engine.fen = prev.fen;
      }
      engine.start(); // run analysis
      await engine.ready(); // wait for analysis completion as uci is stateless
      const best = engine.best.lines[0]; // we could get more than one recommended moves
      if (!best) {
        if (engine.options.debug) log.warn('sf engine return no move', { move, best });
        continue;
      }
      move.best = best.moves[0]; // only interested first move from sequence
      if (move.i) game.line.push(move);
      if (best.score.type === 'exact') {
        move.cpl = best.score.score; // just store current score as temp cpl value
        if (j > 0 && game.line[j - 1]) {
          game.line[j - 1].score = best.score.score; // set score after move
          game.line[j - 1].cpl = Math.round(100 * (game.line[j - 1].cpl - best.score.score)) / 100; // adjust cpl with score before and after move
        }
      }
      if (best.score.type === 'mate') {
        if (j > 0 && game.line[j - 1]) {
          game.line[j - 1].score = game.color?.startsWith(move.color) ? 99 : -99;
          game.line[j - 1].cpl = 0;
          move.flags = `mate in ${best.score.score}`;
        }
      }
      // diag output
      if (engine.options.debug) {
        best.moves.length = 1;
        log.data('move', { move });
        log.data('engine', { move: move.i, depth: engine.best.depth, time: engine.best.time, lines: engine.best.lines.length, best });
      }
    }
    const t1 = process.hrtime.bigint();
    game.line.length = Math.min(game.line.length, nodes.length);
    game.acpl = getACPL(game); // calclulate acpl
    game.line.forEach((move) => move.score *= game.color === 'white' ? 1 : -1); // normalize scores depending which side is played
    game.line.forEach((move) => move.cpl *= move.color === 'b' ? -1 : 1); // normalize scores depending which side is played
    game.line.forEach((move) => move.flags = getFlags(move)); // normalize scores depending which side is played
    if (game.color) {
      game.summary = {
        amazing: game.line.filter((move) => move.flags === 'amazing' && game.color?.startsWith(move.color)).length,
        great: game.line.filter((move) => move.flags === 'great' && game.color?.startsWith(move.color)).length,
        good: game.line.filter((move) => move.flags === 'good' && game.color?.startsWith(move.color)).length,
        bad: game.line.filter((move) => move.flags === 'bad' && game.color?.startsWith(move.color)).length,
        mistake: game.line.filter((move) => move.flags === 'mistake' && game.color?.startsWith(move.color)).length,
        blunder: game.line.filter((move) => move.flags === 'blunder' && game.color?.startsWith(move.color)).length,
      };
    }
    game.engine.time = Math.round(Number(t1 - t0) / 1000 / 1000);
    games.push(game);
  }
  return games;
}

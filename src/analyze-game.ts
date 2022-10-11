import * as log from '@vladmandic/pilogger';
import * as k from 'kokopu';
import { getOpening, Opening } from './openings';
import type * as UCI from './uci';

export type Color = 'white' | 'black';
export class Move {
  turn: number;
  ag: string;
  move: string;
  best: string = '';
  score: number = 0;
  cpl: number = 0;
  color: k.Color;
  figurine: string;
  fen: string;
  flags?: string;
  opening?: Opening;
  repeat?: number;
  check?: boolean;
  capture?: string;
  checkmate?: boolean;
  insufficient?: boolean;
  solved?: boolean;
  stalemate?: boolean;

  constructor(node?: k.Node) {
    this.turn = node ? node?.fullMoveNumber() : -1;
    this.figurine = node?.figurineNotation() || '';
    this.ag = node?.notation() || '';
    // @ts-ignore _data is private
    this.move = node?._data.moveDescriptor.from() ? `${node?._data.moveDescriptor.from()}${node?._data.moveDescriptor.to()}` : undefined; // eslint-disable-line no-underscore-dangle
    this.color = node?.moveColor() || 'w';
    this.fen = node?.position().fen() || '';
  }
}

export interface Overview {
  best: number, great: number, good: number, inaccurate: number, mistake: number, blunder: number
}

export interface EngineInfo {
  name: string | undefined,
  info: string[],
  options: UCI.Options,
  time: number
}

export class Game {
  file: string | undefined;
  game: number;
  moves: number;
  date: Date | undefined;
  analyzed: Date | undefined;
  players: [string, string];
  result: string | undefined;
  line: Move[];
  pgn: string[] = [];
  engine: EngineInfo | undefined;
  acpl: { white: Record<string, unknown>, black: Record<string, unknown>} = { white: {}, black: {} };
  overview: { white: Record<string, unknown>, black: Record<string, unknown>} = { white: {}, black: {} };
  opening?: Opening;

  constructor(data?: Partial<Game>) {
    this.analyzed = new Date();
    this.file = data?.file;
    this.game = data?.game || 0;
    this.moves = data?.moves || 0;
    this.date = data?.date;
    this.players = data?.players || ['', ''];
    this.line = data?.line || [];
    if (data?.pgn) this.pgn = data.pgn;
    if (data?.engine) this.engine = data.engine;
  }
}

const getACPL = (game: Game, cuttoffScore: number, color: Color): number | undefined => {
  const lastMove = cuttoffScore && cuttoffScore > 0 ? game.line.findIndex((move) => (move.score) >= cuttoffScore) : game.line.length - 1;
  const line = game.line.slice(0, lastMove).filter((move) => color.startsWith(move.color));
  const acpl = Math.round(100 * line.reduce((prev, curr) => prev += curr.cpl, 0) / line.length);
  return Math.abs(acpl);
};

const getFlags = (move: Move) => {
  if (move.flags) return move.flags;
  // if (Math.abs(move.score) > 10) return undefined;
  if (move.move === move.best) return 'best';
  if (move.cpl >= 2.0) return 'blunder';
  if (move.cpl >= 1.0) return 'mistake';
  if (move.cpl >= 0.5) return 'inaccurate';
  if (move.cpl >= 0.0) return 'good';
  if (move.cpl <= -1.0) return 'great';
  return 'ok';
};

const getOverview = (game: Game, cuttoffScore: number, color: Color): Overview | undefined => {
  const lastMove = cuttoffScore && cuttoffScore > 0 ? game.line.findIndex((move) => (move.score) >= cuttoffScore) : game.line.length - 1;
  const line = game.line.slice(0, lastMove);
  return {
    best: line.filter((move) => move.flags === 'best' && color.startsWith(move.color)).length,
    blunder: line.filter((move) => move.flags === 'blunder' && color.startsWith(move.color)).length,
    mistake: line.filter((move) => move.flags === 'mistake' && color.startsWith(move.color)).length,
    inaccurate: line.filter((move) => move.flags === 'inaccurate' && color.startsWith(move.color)).length,
    good: line.filter((move) => move.flags === 'good' && color.startsWith(move.color)).length,
    great: line.filter((move) => move.flags === 'great' && color.startsWith(move.color)).length,
  };
};

export async function analyze(engine: UCI.Engine, pgnText: string, pgnFile: string): Promise<Game[]> {
  const database: k.Database = k.pgnRead(pgnText);
  const games: Game[] = [];
  for (let i = 0; i < database.gameCount(); i++) { // pgn can contain multiple games
    const t0 = process.hrtime.bigint();
    let pgnGame: k.Game;
    try {
      pgnGame = database.game(i);
    } catch (err) {
      log.error({ error: 'cannot process', file: pgnFile });
      continue;
    }
    const players: [string, string] = [pgnGame.playerName('w') || '', pgnGame.playerName('b') || ''];
    const variation = pgnGame.mainVariation(); // game can have multiple variations but we only look at played variation
    const nodes: k.Node[] = variation.nodes(); // array of moves
    const game = new Game({
      file: pgnFile,
      game: i + 1,
      moves: Math.round(nodes.length / 2),
      date: pgnGame.dateAsDate(),
      players,
      pgn: pgnText.split('\n'),
      engine: { name: engine.name, info: engine.info, options: engine.options, time: 0 },
    });
    game.result = pgnGame.result();
    await engine.reset(); // reset engine
    let previous: Move = new Move();
    const scores: number[] = [];
    const moves: string[] = [];
    const fens: string[] = [];
    const position = new k.Position();
    for (let j = 0; j <= nodes.length; j++) { // analyze all moves
      // create move
      const move = new Move(nodes[j]); // create played move
      moves.push(move.ag);

      // check opening database
      if (j < 20) {
        const opening = getOpening(moves);
        if (opening) {
          move.opening = { eco: opening.eco, name: opening.name };
          game.opening = move.opening;
        }
      }

      // annotate move
      if (move.fen) fens.push(move.fen);
      if (move.move) {
        const moveDesc = position.uci(move.move);
        if (moveDesc.isCapture()) move.capture = moveDesc.capturedColoredPiece();
      }
      position.play(move.ag);
      const repetitions = fens.filter((f) => f === move.fen).length;
      if (repetitions > 1) move.repeat = repetitions;
      if (move.fen) position.fen(move.fen);
      if (position.isCheck()) move.check = true;
      if (position.isCheckmate()) move.checkmate = true;
      if (position.isStalemate()) move.stalemate = true;
      if (position.isInsufficientMaterial()) move.insufficient = true;

      // run engine
      let res: UCI.Analysis;
      res = await engine.play(previous.fen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w - - 0 1');
      while ((res?.lines?.length || 0) < 1) {
        log.warn('no move found, retrying:', res);
        res = await engine.play(previous.fen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w - - 0 1');
        continue;
      }
      const best: UCI.Line = res.lines[0];
      move.best = best.moves[0]; // only interested first move from sequence
      game.line.push(move); // add move to game

      // check engine scores
      if (best.score.type === 'cp') scores.push(best.score.score); // add normalized score
      if (best.score.type === 'mate') {
        scores.push((move.color === 'w' ? 1 : -1) * 100);
        previous.flags = `mate in ${best.score.score}`;
      }
      if (best.score.type === 'syzygy') {
        scores.push(best.score.score);
        previous.solved = true;
      }

      // update score/cpl for previous move
      previous.cpl = (move.color === 'w' ? -1 : 1) * Math.round(100 * (scores[scores.length - 2] - scores[scores.length - 1])) / 100;
      previous.score = scores[scores.length - 1]; // set score for previous move after it was played as engine
      previous.flags = getFlags(previous);

      // delete unused fields
      for (const key of Object.keys(move)) {
        if (!move[key]) delete move[key];
      }

      if (previous.move && engine.options.verbose) log.data(previous);

      // switch moves
      previous = move; // switch current move to previous

      // diag output
      if (engine.options.debug) {
        best.moves.length = 1;
        log.data('move', { move, previous });
        log.data('engine', { turn: move.turn, depth: engine.best.depth, time: engine.best.time, lines: engine.best.lines.length, best });
      }
    }
    const t1 = process.hrtime.bigint();
    game.line.length = Math.min(game.line.length, nodes.length);
    game.acpl = {
      white: { full: getACPL(game, 0, 'white'), decided: getACPL(game, 10, 'white') },
      black: { full: getACPL(game, 0, 'black'), decided: getACPL(game, 10, 'black') },
    };
    game.overview = {
      white: { full: getOverview(game, 0, 'white'), decided: getOverview(game, 10, 'white') },
      black: { full: getOverview(game, 0, 'black'), decided: getOverview(game, 10, 'black') },
    };
    if (game.engine) game.engine.time = Math.round(Number(t1 - t0) / 1000 / 1000);
    games.push(game);
  }
  return games;
}
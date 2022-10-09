import * as log from '@vladmandic/pilogger';
import * as pgn from 'kokopu';
import { getOpeningAG } from './openings';
import type * as UCI from './uci';

export type Color = 'white' | 'black';
export class Move {
  i: number;
  ag: string;
  desc: string;
  best: string = '';
  score: number = 0;
  cpl: number = 0;
  color: Color;
  figuring: string;
  fen: string;
  flags: string | undefined;

  constructor(node?: pgn.Node) {
    this.i = node ? node?.fullMoveNumber() : -1;
    this.figuring = node?.figurineNotation() || '';
    this.ag = node?.notation() || '';
    // @ts-ignore _data is private
    this.desc = `${node?._data.moveDescriptor.from()}${node?._data.moveDescriptor.to()}`; // eslint-disable-line no-underscore-dangle
    this.color = node?.moveColor() === 'w' ? 'white' : 'black';
    this.fen = node?.position().fen() || '';
  }
}

export interface Summary {
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
  win: boolean | undefined;
  line: Move[];
  color: Color | undefined;
  acpl: { full: number | undefined, decided: number | undefined } = { full: undefined, decided: undefined };
  pgn: string[] = [];
  engine: EngineInfo | undefined;
  summary: { full: Summary | undefined, decided: Summary | undefined } = { full: undefined, decided: undefined };
  opening: { eco: string | undefined, name: string | undefined, depth: number | undefined } = { eco: undefined, name: undefined, depth: undefined };

  constructor(data?: Partial<Game>) {
    this.analyzed = new Date();
    this.file = data?.file;
    this.game = data?.game || 0;
    this.moves = data?.moves || 0;
    this.date = data?.date;
    this.players = data?.players || ['', ''];
    this.line = data?.line || [];
    this.color = data?.color;
    if (data?.pgn) this.pgn = data.pgn;
    if (data?.engine) this.engine = data.engine;
  }
}

const getACPL = (game: Game, cuttoffScore?: number): number | undefined => {
  if (!game?.color) return undefined;
  const lastMove = cuttoffScore && cuttoffScore > 0 ? game.line.findIndex((move) => (move.score) >= cuttoffScore) : game.line.length - 1;
  const line = game.line.slice(0, lastMove).filter((move) => game.color?.startsWith(move.color));
  const acpl = Math.round(100 * line.reduce((prev, curr) => prev += curr.cpl, 0) / line.length);
  return acpl;
};

const getFlags = (move: Move) => {
  if (move.flags) return move.flags;
  // if (Math.abs(move.score) > 10) return undefined;
  if (move.desc === move.best) return 'best';
  if (move.cpl >= 2.0) return 'blunder';
  if (move.cpl >= 1.0) return 'mistake';
  if (move.cpl >= 0.5) return 'inaccurate';
  if (move.cpl >= 0.0) return 'good';
  if (move.cpl <= -1.0) return 'great';
  return 'ok';
};

const getSummary = (game: Game, cuttoffScore?: number): Summary | undefined => {
  if (!game?.color) return undefined;
  const lastMove = cuttoffScore && cuttoffScore > 0 ? game.line.findIndex((move) => (move.score) >= cuttoffScore) : game.line.length - 1;
  const line = game.line.slice(0, lastMove);
  return {
    best: line.filter((move) => move.flags === 'best' && game.color?.startsWith(move.color)).length,
    blunder: line.filter((move) => move.flags === 'blunder' && game.color?.startsWith(move.color)).length,
    mistake: line.filter((move) => move.flags === 'mistake' && game.color?.startsWith(move.color)).length,
    inaccurate: line.filter((move) => move.flags === 'inaccurate' && game.color?.startsWith(move.color)).length,
    good: line.filter((move) => move.flags === 'good' && game.color?.startsWith(move.color)).length,
    great: line.filter((move) => move.flags === 'great' && game.color?.startsWith(move.color)).length,
  };
};

export async function analyze(engine: UCI.Engine, pgnText: string, pgnFile: string, playerName?): Promise<Game[]> {
  const database: pgn.Database = pgn.pgnRead(pgnText);
  const games: Game[] = [];
  for (let i = 0; i < database.gameCount(); i++) { // pgn can contain multiple games
    const t0 = process.hrtime.bigint();
    let pgnGame: pgn.Game;
    try {
      pgnGame = database.game(i);
    } catch (err) {
      log.error({ error: 'cannot process', file: pgnFile });
      continue;
    }
    const players: [string, string] = [pgnGame.playerName('w') || '', pgnGame.playerName('b') || ''];
    let color;
    if (players[0] === playerName) color = 'white';
    if (players[1] === playerName) color = 'black';
    const variation = pgnGame.mainVariation(); // game can have multiple variations but we only look at played variation
    const nodes: pgn.Node[] = variation.nodes(); // array of moves
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
    if (game.color === 'white') game.win = game.result === '1-0';
    if (game.color === 'black') game.win = game.result === '0-1';
    await engine.reset(); // reset engine
    let previous: Move = new Move();
    const scores: number[] = [];
    const agMoves: string[] = [];
    for (let j = 0; j <= nodes.length; j++) { // analyze all moves
      const move = new Move(nodes[j]); // create played move
      agMoves.push(move.ag);
      if (j < 20) {
        const opening = getOpeningAG(agMoves);
        if (opening) game.opening = { eco: opening.eco, name: opening.name, depth: opening.depth };
      }
      const res: UCI.Analysis = await engine.play(previous.fen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w - - 0 1');
      if (!res || !res.depth || !res.lines || res.lines.length === 0) {
        log.warn('sf engine return no move', { current: move, previous, fen: engine.fen, res });
        continue;
      }
      const best: UCI.Line = res.lines[0];
      move.best = best.moves[0]; // only interested first move from sequence
      game.line.push(move); // add move to game
      if (best.score.type === 'cp') {
        scores.push((game.color === 'black' ? -1 : 1) * best.score.score); // add normalized score
      }
      if (best.score.type === 'mate') {
        scores.push(game.color?.startsWith(move.color) ? 99 : -99);
        previous.flags = `mate in ${best.score.score}`;
      }
      previous.cpl = Math.round(100 * (scores[scores.length - 2] - scores[scores.length - 1])) / 100;
      previous.score = scores[scores.length - 1]; // set score for previous move after it was played as engine
      previous.flags = getFlags(previous);
      previous = move; // switch current move to previous
      // diag output
      if (engine.options.debug) {
        best.moves.length = 1;
        log.data('move', { move, previous });
        log.data('engine', { move: move.i, depth: engine.best.depth, time: engine.best.time, lines: engine.best.lines.length, best });
      }
    }
    const t1 = process.hrtime.bigint();
    game.line.length = Math.min(game.line.length, nodes.length);
    game.acpl = { full: getACPL(game, 0), decided: getACPL(game, 10) };
    game.summary = { full: getSummary(game, 0), decided: getSummary(game, 10) };
    if (game.engine) game.engine.time = Math.round(Number(t1 - t0) / 1000 / 1000);
    games.push(game);
  }
  return games;
}

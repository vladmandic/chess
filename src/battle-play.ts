import * as log from '@vladmandic/pilogger';
import * as k from 'kokopu';
import type * as UCI from './uci';
import { getOpening } from './openings';
import type { Config } from './battle';

// eslint-disable-next-line max-len
const squares = ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1', 'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2', 'a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3', 'a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4', 'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5', 'a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6', 'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7', 'a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'];

export async function playGame(ew: UCI.Engine, eb: UCI.Engine, round: number, config: Config): Promise<k.Game> {
  // reset engines
  await ew.reset();
  await eb.reset();

  // create new game
  const game = new k.Game();
  game.date(new Date());
  game.event('battle');
  game.playerName('w', ew.name?.toLocaleLowerCase());
  game.playerName('b', eb.name?.toLocaleLowerCase());
  game.annotator('https://github.com/vladmandic/chess');
  game.site('https://github.com/vladmandic/chess');
  game.playerTitle('w', `depth:${ew.options.depth} maxtime:${ew.options.maxTime}`);
  game.playerTitle('b', `depth:${eb.options.depth} maxtime:${eb.options.maxTime}`);
  game.round(round.toString());
  game.result('*');

  // setup variables
  const position = new k.Position();
  const moves: string[] = [];
  const fens: string[] = [];
  const time: [number, number] = [0, 0];
  const nodes: [number, number] = [0, 0];

  let side: k.Color = config.initialFEN?.split(' ')[1] as k.Color || 'w';
  if (config.initialFEN) position.fen(config.initialFEN);
  game.initialPosition(position);
  let line: k.Variation | k.Node = game.mainVariation(); // only set line once initial position is set

  log.info('starting game', { round, side, fen: position.fen() });
  let fen = position.fen();

  // run moves
  while (true) { // eslint-disable-line no-constant-condition
    // check engine state
    if (side === 'w' ? (ew.state !== 'ready') : (eb.state !== 'ready')) {
      log.error('engine not ready, aborting:', { side });
      break;
    }
    fens.push(fen);

    // run actual engine calculation
    const best = side === 'w' ? await ew.play(fen) : await eb.play(fen);
    if ((best?.lines?.length || 0) < 1) {
      log.warn('no move found, retrying:', best);
      continue;
    }
    time[side === 'w' ? 0 : 1] += best.time;

    // play recommended move on the board
    const uci = best.lines[0].moves[0];
    if (!uci) continue;
    nodes[side === 'w' ? 0 : 1] += best.lines[0].nodes;
    const moveDesc = position.uci(uci);
    const san = position.notation(moveDesc);
    moves.push(uci);
    position.play(san);
    line = line.play(san);
    fen = position.fen();
    const move: Record<string, unknown> = { turn: line.fullMoveNumber(), side, move: best.lines[0].moves[0], fen, time: best.time, depth: best.depth };

    // check end-game solutions
    let pieces = '';
    for (const sq of squares) {
      const piece = position.square(sq as k.Square);
      if (piece[0] === 'w') pieces += piece[1].toUpperCase();
      else if (piece[0] === 'b') pieces += piece[1];
    }
    move.pieces = pieces.length;
    if (config.solvedDepth && pieces.length <= config.solvedDepth) {
      const solved = await ew.solve();
      if (solved) move.solved = solved;
    }

    // annotate move
    const opening = getOpening(moves);
    if (opening) {
      move.opening = { eco: opening.eco, name: opening.name };
      game.eco(opening.eco);
      game.opening(opening.name);
    }
    const repetitions = fens.filter((f) => f === move.fen).length - 1;
    if (repetitions >= 1) move.repeat = repetitions;
    if (moveDesc.isCapture()) move.capture = moveDesc.capturedColoredPiece();
    if (moveDesc.isCastling()) move.castle = true;
    if (moveDesc.isPromotion()) move.promotion = moveDesc.coloredPromotion();
    if (position.isCheck()) move.check = true;
    if (position.isCheckmate()) move.checkmate = true;
    if (position.isStalemate()) move.stalemate = true;
    if (position.isDead()) move.insufficient = true;
    if (!position.isLegal()) move.illegal = true;

    if (best.lines[0].score.type === 'cp') move.score = best.lines[0].score.score;
    if (best.lines[0].score.type === 'syzygy') {
      move.score = best.lines[0].score.score;
      move.solved = true;
    }
    if (best.lines[0].score.type === 'mate') move.mate = best.lines[0].score.score;
    log.data(move);

    // check game conditions
    if (move.illegal) {
      log.error('Illegal position reached', position.fen());
      break;
    }
    if (move.checkmate) {
      game.result(position.turn() === 'w' ? '0-1' : '1-0');
      game.termination((position.turn() === 'w' ? 'Black' : 'White') + ' wins');
      break;
    }
    if (move.stalemate) {
      game.termination('Stalemate');
      game.result('1/2-1/2');
      break;
    }
    if (move.insufficient) {
      game.termination('Insufficient material');
      game.result('1/2-1/2');
      break;
    }
    if (config.maxMoves && (line.fullMoveNumber() >= config.maxMoves)) {
      game.termination('Maxmimum moves reached');
      break;
    }
    if (repetitions >= 3) {
      game.termination('3-fold repetition');
      game.result('1/2-1/2');
      break;
    }

    side = side === 'w' ? 'b' : 'w';
    position.turn(side);
  }

  game.playerTitle('w', game.playerTitle('w') + ` nodes:${nodes[0]} usedTime:${time[0]}ms`);
  game.playerTitle('b', game.playerTitle('b') + ` nodes:${nodes[1]} usedTime:${time[1]}ms`);
  return game;
}

import { readFileSync, writeFileSync } from 'fs';
import * as log from '@vladmandic/pilogger';
import * as k from 'kokopu';
import * as UCI from './uci';
import { getOpeningUCI } from './openings';

interface Config {
  maxMoves?: number,
  numGames?: number,
  solvedDepth?: number,
  initialFEN?: string,
  pgnOutput?: string,
  engineOptions: Partial<UCI.Options>,
}

let config: Config;

// eslint-disable-next-line max-len
const squares = ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1', 'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2', 'a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3', 'a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4', 'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5', 'a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6', 'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7', 'a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'];

async function playGame(ew: UCI.Engine, eb: UCI.Engine, round: number): Promise<k.Game> {
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
  game.tag('WhiteOptions', `depth:${ew.options.depth} maxtime:${ew.options.maxTime}`);
  game.tag('BlackOptions', `depth:${eb.options.depth} maxtime:${eb.options.maxTime}`);
  game.round(round.toString());
  game.result('*');

  // setup variables
  const position = new k.Position();
  const moves: string[] = [];
  const fens: string[] = [];
  const time: [number, number] = [0, 0];
  let line: k.Variation | k.Node = game.mainVariation();

  if (!config.initialFEN) config.initialFEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
  let side: k.Color = config.initialFEN.split(' ')[1] as k.Color || 'w';
  position.fen(config.initialFEN);

  game.tag('FEN', position.fen());
  log.info('starting game', { round, side, fen: position.fen() });
  let fen = position.fen();

  // run moves
  while (true) { // eslint-disable-line no-constant-condition
    if (ew.state !== 'ready' || eb.state !== 'ready') {
      log.warn('engine not ready, aborting');
      break;
    }
    fens.push(fen);

    // run actual engine calculation
    const best = side === 'w' ? await ew.play(fen) : await eb.play(fen);
    if (best.lines.length < 1) continue; // retry as engine did not report a move
    time[side === 'w' ? 0 : 1] += best.time;

    // play recommended move on the board
    const uci = best.lines[0].moves[0];
    if (!uci) continue;
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
    const opening = getOpeningUCI(moves);
    if (opening) {
      move.opening = { eco: opening.eco, name: opening.name };
      game.tag('ECO', opening.eco);
      game.tag('Opening', opening.name);
    }

    const repetitions = fens.filter((f) => f === move.fen).length;
    if (repetitions >= 1) move.repeat = repetitions;
    if (position.isCheck()) move.check = true;
    if (moveDesc.isCapture()) move.capture = moveDesc.capturedColoredPiece();
    if (position.isCheckmate()) move.checkmate = true;
    if (position.isStalemate()) move.stalemate = true;
    if (position.isInsufficientMaterial()) move.insufficient = true;
    if (best.lines[0].score.type === 'cp') move.score = best.lines[0].score.score;
    if (best.lines[0].score.type === 'syzygy') {
      move.score = best.lines[0].score.score;
      move.solved = true;
    }
    if (best.lines[0].score.type === 'mate') move.mate = best.lines[0].score.score;
    log.info(move);

    // check game conditions
    if (!position.isLegal()) {
      log.error('illegal position reached', position.fen());
      break;
    }
    if (position.isCheckmate()) {
      game.result(position.turn() === 'w' ? '0-1' : '1-0');
      game.tag('Termination', (position.turn() === 'w' ? 'Black' : 'White') + ' wins');
      break;
    }
    if (position.isStalemate()) {
      game.tag('Termination', 'Stalemate');
      game.result('1/2-1/2');
      break;
    }
    if (position.isInsufficientMaterial()) {
      game.tag('Termination', 'Insufficient material');
      game.result('1/2-1/2');
      break;
    }
    if (config.maxMoves && line.fullMoveNumber() >= config.maxMoves) {
      game.tag('Termination', 'Maxmimum moves reached');
      break;
    }
    if (repetitions >= 3) {
      game.tag('Termination', '3-fold repetition');
      game.result('1/2-1/2');
      break;
    }

    side = side === 'w' ? 'b' : 'w';
    position.turn(side);
  }
  game.tag('WhiteTime', `${time[0]} ms`);
  game.tag('BlackTime', `${time[1]} ms`);
  return game;
}

async function main() {
  log.configure({ inspect: { breakLength: 400 } });
  log.headerJson();

  const configFile = process.argv[2] || 'battle.json';
  log.info({ configFile });
  const configText = readFileSync(configFile, 'utf-8');
  config = JSON.parse(configText) as Config;
  log.info('config', config);

  const ew: UCI.Engine = new UCI.Engine(config.engineOptions[0]); // engine white
  await ew.ready();
  log.state('engine white', { name: ew.name, state: ew.state });
  const eb: UCI.Engine = new UCI.Engine(config.engineOptions[1]); // engine black
  await eb.ready();
  log.state('engine black', { name: eb.name, state: eb.state });

  let pgn: string = '';
  if (!config.numGames) config.numGames = 1;
  for (let i = 1; i <= config.numGames; i++) {
    const game = await playGame(ew, eb, i);
    pgn += k.pgnWrite(game) + '\n';
  }
  if (config.pgnOutput) {
    writeFileSync(config.pgnOutput, pgn, 'utf-8');
    log.data('pgn', { file: config.pgnOutput }, `\n${pgn}`);
  } else {
    log.data('pgn', `\n${pgn}`);
  }

  ew.terminate();
  eb.terminate();
  process.exit(0);
}

main();

/*
  { "depth": 100, "maxTime": 25, "engine": "/home/vlado/dev/chess/engine/stockfish/sf15-bmi2", "nnue": "nn-6877cd24400e.nnue", "syzygy": "/home/vlado/dev/chess/engine/syzygy" },
  { "depth": 100, "maxTime": 25, "engine": "/home/vlado/dev/chess/engine/beserk/berserk-10-x64-avx2.exe", "nnue": "nn-6877cd24400e.nnue" }
  { "depth": 100, "maxTime": 25, "engine": "/home/vlado/dev/chess/engine/leela/lc0-0.28.2-cuda.exe" },
*/

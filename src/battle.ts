import * as fs from 'fs';
import * as log from '@vladmandic/pilogger';
import * as k from 'kokopu';
import * as UCI from './uci';
import { initOpenings, getOpeningUCI } from './openings';

interface Config {
  maxMoves?: number,
  numGames?: number,
  solvedDepth?: number,
  initialFEN?: string,
  pgnOutput?: string,
  openings?: string,
  engineOptions: Partial<UCI.Options>,
  /*
    { "depth": 100, "maxTime": 25, "engine": "engine/stockfish/sf15-bmi2", "nnue": "nn-6877cd24400e.nnue", "syzygy": "engine/syzygy", "debug": false },
    { "depth": 100, "maxTime": 25, "engine": "engine/beserk/berserk-10-x64-avx2.exe", "nnue": "engine/beserk/berserk-c982d9682d4e.nn", "debug": false }
    { "depth": 100, "maxTime": 25, "engine": "leela/lc0-0.28.2-cuda.exe", "debug": false },
    { "depth": 100, "maxTime": 25, "engine": "../engine/lichess-org/stockfish.js", "debug": false, "type": "wasm" }
  */
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
  game.playerTitle('w', `depth:${ew.options.depth} maxtime:${ew.options.maxTime}`);
  game.playerTitle('b', `depth:${eb.options.depth} maxtime:${eb.options.maxTime}`);
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
    if ((best?.lines?.length || 0) < 1) {
      log.warn('no move found, retrying:', best);
      continue;
    }
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
      game.eco(opening.eco);
      game.opening(opening.name);
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
    log.data(move);

    // check game conditions
    if (!position.isLegal()) {
      log.error('illegal position reached', position.fen());
      break;
    }
    if (position.isCheckmate()) {
      game.result(position.turn() === 'w' ? '0-1' : '1-0');
      game.termination((position.turn() === 'w' ? 'Black' : 'White') + ' wins');
      break;
    }
    if (position.isStalemate()) {
      game.termination('Stalemate');
      game.result('1/2-1/2');
      break;
    }
    if (position.isInsufficientMaterial()) {
      game.termination('Insufficient material');
      game.result('1/2-1/2');
      break;
    }
    if (config.maxMoves && line.fullMoveNumber() >= config.maxMoves) {
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

  game.playerTitle('w', game.playerTitle('w') + ` usedTime: ${time[0]} ms`);
  game.playerTitle('b', game.playerTitle('b') + ` usedTime: ${time[1]} ms`);
  return game;
}

async function main() {
  log.configure({ inspect: { breakLength: 250 } });
  log.headerJson();

  const configFile = process.argv[2] || 'battle.json';
  log.info({ configFile });
  const configText = fs.readFileSync(configFile, 'utf-8');
  config = JSON.parse(configText) as Config;
  log.info('config', config);
  if (!config.numGames) config.numGames = 1;
  initOpenings(config.openings);

  const ew: UCI.Engine = new UCI.Engine(config.engineOptions[0]); // engine white
  await ew.init();
  log.state('engine white', { name: ew.name, type: ew.options.type, state: ew.state, info: ew.info });
  const eb: UCI.Engine = new UCI.Engine(config.engineOptions[1]); // engine black
  await eb.init();
  log.state('engine black', { name: eb.name, type: eb.options.type, state: eb.state, info: eb.info });

  let pgn: string = '';
  for (let i = 1; i <= config.numGames; i++) {
    const game = await playGame(ew, eb, i);
    pgn += k.pgnWrite(game, { withPlyCount: true }) + '\n';
  }

  if (config.pgnOutput) {
    fs.writeFileSync(config.pgnOutput, pgn, 'utf-8');
    log.info('pgn', { file: config.pgnOutput }, `\n${pgn}`);
  } else {
    log.info('pgn', `\n${pgn}`);
  }

  ew.terminate();
  eb.terminate();
  process.exit(0);
}

main();

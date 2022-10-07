import * as log from '@vladmandic/pilogger';
import * as k from 'kokopu';
import * as UCI from './uci';
import { getOpening } from './game';

const maxMoves = 200;
const maxGames = 2;

const engineOptions: [Partial<UCI.Options>, Partial<UCI.Options>] = [
  { depth: 100, maxTime: 25, engine: '/home/vlado/dev/chess/engine/stockfish/sf15-bmi2', nnue: 'nn-6877cd24400e.nnue' },
  { depth: 100, maxTime: 25, engine: '/home/vlado/dev/chess/engine/leela/lc0-0.28.2-cuda.exe' },
];

async function playGame(ew: UCI.Engine, eb: UCI.Engine, round: number, initialFEN: string): Promise<k.Game> {
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

  let side: k.Color = initialFEN.split(' ')[1] as k.Color || 'w';
  position.fen(initialFEN);
  game.tag('FEN', position.fen());
  log.info('starting game', { round, side, fen: position.fen() });
  let fen = position.fen();

  // run moves
  while (true) { // eslint-disable-line no-constant-condition
    fens.push(fen);

    // run actual engine calculation
    const best = side === 'w' ? await ew.play(fen) : await eb.play(fen);
    if (best.lines.length !== 1) continue; // retry as engine did not report a move
    time[side === 'w' ? 0 : 1] += best.time;

    // play recommended move on the board
    const uci = best.lines[0].moves[0];
    if (!uci) break;
    const moveDesc = position.uci(uci);
    const san = position.notation(moveDesc);
    moves.push(san);
    position.play(san);
    line = line.play(san);
    fen = position.fen();
    const move: Record<string, unknown> = { turn: line.fullMoveNumber(), side, move: best.lines[0].moves[0], fen, time: best.time, depth: best.depth };

    // annotate move
    const openings = getOpening(moves);
    if (openings.length > 0) move.opening = openings.map((o) => ({ eco: o.eco, name: o.name.toLowerCase() }))[0];
    if (move.opening) game.tag('ECO', `${move.opening['eco']}: ${move.opening['name']}`);
    const repetitions = fens.filter((f) => f === move.fen).length;
    if (repetitions >= 1) move.repeat = repetitions;
    if (position.isCheck()) move.check = true;
    if (moveDesc.isCapture()) move.capture = moveDesc.capturedColoredPiece();
    if (position.isCheckmate()) move.checkmate = true;
    if (position.isStalemate()) move.stalemate = true;
    if (position.isInsufficientMaterial()) move.insufficient = true;
    if (best.lines[0].score.type === 'exact') move.score = best.lines[0].score.score;
    if (best.lines[0].score.type === 'mate') move.mate = best.lines[0].score.score;
    log.info(move);

    // check game conditions
    if (!position.isLegal()) {
      log.error('illegal position reached', position.fen());
      break;
    }
    if (position.isCheckmate()) {
      game.result(position.turn() === 'w' ? '0-1' : '1-0');
      game.tag('Termination', (position.turn() === 'w' ? 'black' : 'white') + ' win');
      break;
    }
    if (position.isStalemate()) {
      game.tag('Termination', 'stalemate');
      game.result('1/2-1/2');
      break;
    }
    if (position.isInsufficientMaterial()) {
      game.tag('Termination', 'insufficient material');
      game.result('1/2-1/2');
      break;
    }
    if (line.fullMoveNumber() >= maxMoves) {
      game.tag('Termination', 'maxmimum moves reached');
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

  const ew: UCI.Engine = new UCI.Engine(engineOptions[0]); // engine white
  await ew.ready();
  log.state('engine white', { name: ew.name, state: ew.state, info: ew.info, options: ew.options });
  const eb: UCI.Engine = new UCI.Engine(engineOptions[1]); // engine black
  await eb.ready();
  log.state('engine black', { name: eb.name, state: eb.state, info: eb.info, options: eb.options });

  const initialFEN = (process.argv.length > 2) ? process.argv[2] : 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

  let pgn: string = '';
  for (let i = 1; i <= maxGames; i++) {
    const game = await playGame(ew, eb, i, initialFEN);
    pgn += k.pgnWrite(game) + '\n';
  }
  log.data('pgn', '\n', pgn);

  ew.terminate();
  eb.terminate();
  process.exit(0);
}

main();

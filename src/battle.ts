import * as k from 'kokopu';
import * as log from '@vladmandic/pilogger';
import * as UCI from './uci';
import { getOpening } from './game';

const engineOptions: [Partial<UCI.Options>, Partial<UCI.Options>] = [
  { depth: 11, engine: '/home/vlado/dev/chess/engine/stockfish/sf15-bmi2', nnue: 'nn-6877cd24400e.nnue' },
  // { depth: 8, engine: '/home/vlado/dev/chess/engine/stockfish/sf15-bmi2', nnue: 'nn-6877cd24400e.nnue' },
  { depth: 4, engine: '/home/vlado/dev/chess/engine/leela/lc0-0.28.2-cuda.exe' },
];

const maxMoves = 100;

async function main() {
  log.configure({ inspect: { breakLength: 400 } });
  log.headerJson();

  const ew: UCI.Engine = new UCI.Engine(engineOptions[0]); // engine white
  await ew.ready();
  log.state('engine white', { name: ew.name, state: ew.state, info: ew.info, options: ew.options });
  const eb: UCI.Engine = new UCI.Engine(engineOptions[1]); // engine black
  await eb.ready();
  log.state('engine black', { name: eb.name, state: eb.state, info: eb.info, options: eb.options });

  const game = new k.Game();
  game.date(new Date());
  game.playerName('w', ew.name?.toLocaleLowerCase());
  game.playerName('b', eb.name?.toLocaleLowerCase());
  game.annotator('https://github.com/vladmandic/chess');
  game.site('https://github.com/vladmandic/chess');
  game.playerTitle('w', `depth:${ew.options.depth} maxtime:${ew.options.maxTime}`);
  game.playerTitle('b', `depth:${eb.options.depth} maxtime:${eb.options.maxTime}`);
  game.result('*');
  game.event('engine battle');

  const position = new k.Position();
  const moves: string[] = [];
  const fens: string[] = [];
  let side: k.Color = 'w';
  const time: [number, number] = [0, 0];
  let turn = 0;
  let line: k.Variation | k.Node = game.mainVariation();
  let i = 1;

  for (i; i <= 2 * maxMoves; i++) {
    if (side === 'w') turn++;
    const fen = position.fen();
    fens.push(fen);
    const repetitions = fens.filter((f) => f === fen).length;
    if (repetitions >= 3) {
      game.round('3-fold repetition');
      game.result('1/2-1/2');
      break;
    }
    const t0 = process.hrtime.bigint();
    const best = side === 'w'
      ? await ew.play(fen)
      : await eb.play(fen);
    const t1 = process.hrtime.bigint();
    time[side === 'w' ? 0 : 1] += Number(t1 - t0);
    if (best.lines.length !== 1) continue; // retry
    const uci = best.lines[0].moves[0];
    if (!uci) break;
    const moveDesc = position.uci(uci);
    const san = position.notation(moveDesc);
    moves.push(san);
    position.play(san);
    line = line.play(san);

    const move: Record<string, unknown> = { turn, side, score: best.lines[0].score.score, move: best.lines[0].moves[0], fen };
    const openings = getOpening(moves);
    if (openings.length > 0) move.opening = openings.map((o) => ({ eco: o.eco, name: o.name.toLowerCase() }))[0];
    if (position.isCheck()) move.check = true;
    if (moveDesc.isCapture()) move.capture = moveDesc.capturedColoredPiece();
    if (position.isCheckmate()) move.checkmate = true;
    if (position.isStalemate()) move.stalemate = true;
    if (best.lines[0].score.type === 'mate') move.mate = best.lines[0].score.score;
    log.info(move);

    if (!position.isLegal()) {
      log.error('illegal position reached', position.fen());
      break;
    }
    if (position.isCheckmate()) {
      game.result(position.turn() === 'w' ? '0-1' : '1-0');
      game.round((position.turn() === 'w' ? 'black' : 'white') + ' win');
      break;
    }
    if (position.isStalemate()) {
      game.result('1/2-1/2');
      game.round('stalemate');
      break;
    }

    side = side === 'w' ? 'b' : 'w';
    position.turn(side);
  }
  if (i === 2 * maxMoves) game.round('maxmimum moves reached');
  game.playerElo('w', Math.round(time[0] / 1000 / 1000));
  game.playerElo('b', Math.round(time[1] / 1000 / 1000));
  log.data('\n', k.pgnWrite(game));

  ew.terminate();
  eb.terminate();
  process.exit(0);
}

main();

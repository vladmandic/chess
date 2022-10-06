import * as fs from 'fs';
import * as log from '@vladmandic/pilogger';
import * as UCI from './uci';
import * as game from './game';

const playerName = 'VladMandic';

const uciOptions: Partial<UCI.Options> = {
  debug: false, // log uci communication
  lines: 1, // analyze n top lines
  depth: 12, // max depth per move
  maxTime: 2000, // max time per move in ms
  maxScore: 10, // consider game decided for purpose of statistics once score is reached
  engine: '/home/vlado/dev/chess/engine/stockfish/sf15-bmi2', // stockfish executable
  // engine: '/home/vlado/dev/chess/engine/leela/lc0-0.28.2-cuda.exe',
  nnue: 'nn-6877cd24400e.nnue', // nnue file with path local to stockfish binary
  options: ['Threads value 16'], // additional options to pass to stockfish engine
};

async function main() {
  log.configure({ inspect: { breakLength: 400 } });
  log.headerJson();

  const engine: UCI.Engine = new UCI.Engine(uciOptions); // create engine
  await engine.ready(); // wait until engine is ready
  log.state('engine', { name: engine.name, state: engine.state, info: engine.info });
  log.state('options', engine.options);

  const games: game.Game[] = [];
  const args = process.argv.slice(2); // all cli ars after process name
  let files: string[] = [];
  if (args.length === 1 && fs.existsSync(args[0])) {
    files.push(args[0]); // keep it simple just use file as-is
  } else {
    const globby = await import('globby'); // dynamic import as globby is esm
    files = await globby.globby(args, { expandDirectories: true, gitignore: true, deep: 2 }); // find matching files
  }
  log.info('list', { files: files.length });
  for (const fileName of files) {
    const pgnText = fs.readFileSync(fileName, 'utf8');
    // analyze game using specified engine and from perspecitive of a specific player
    const analyzedGames: game.Game[] = await game.analyze(engine, pgnText, fileName, playerName);
    games.push(...analyzedGames);
    for (const g of analyzedGames) {
      const summary = { file: g.file, game: g.game, date: g.date, players: g.players, win: g.win, color: g.color, moves: g.moves, acpl: g.acpl.decided, time: g.engine?.time, summary: g.summary.decided };
      log.data('summary', summary); // one-line short summary
    }
  }
  if (games.length === 1) log.data('details', games[0]); // full game details

  engine.terminate(); // terminate stockfish engine
  process.exit(0); // nodejs process can sometimes linger when using spawned processes
}

main();

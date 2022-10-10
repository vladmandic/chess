import * as fs from 'fs';
import * as log from '@vladmandic/pilogger';
import * as UCI from './uci';
import * as game from './game';
import * as uciOptions from '../analyze.json';

async function main() {
  log.configure({ inspect: { breakLength: 250 } });
  log.headerJson();

  const engine: UCI.Engine = new UCI.Engine(uciOptions as Partial<UCI.Options>); // create engine
  await engine.init(); // wait until engine is ready
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
    const analyzedGames: game.Game[] = await game.analyze(engine, pgnText, fileName);
    games.push(...analyzedGames);
  }
  if (games.length === 1) {
    log.data('details', games[0]); // full game details
  } else {
    for (const g of games) {
      const summary = { file: g.file, game: g.game, date: g.date, players: g.players, result: g.result, moves: g.moves, time: g.engine?.time };
      log.data('summary', summary); // one-line short summary
      log.data('acpl', g.acpl); // one-line short summary
      log.data('overview', g.overview); // one-line short summary
    }
  }

  engine.terminate(); // terminate stockfish engine
  process.exit(0); // nodejs process can sometimes linger when using spawned processes
}

main();

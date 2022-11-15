import * as fs from 'fs';
import * as path from 'path';
import * as log from '@vladmandic/pilogger';
import * as UCI from './uci';
import * as game from './analyze-game';

async function main() {
  log.configure({ inspect: { breakLength: 320 } });
  log.headerJson();

  const optionsFile = fs.readFileSync(path.join(__dirname, '../analyze.json'), 'utf8');
  const uciOptions = JSON.parse(optionsFile);
  const engine: UCI.Engine = new UCI.Engine(uciOptions as Partial<UCI.Options>); // create engine
  await engine.init(); // wait until engine is ready
  log.state('engine', { name: engine.name, state: engine.state, info: engine.info });
  if (engine.options.verbose === true) log.state('options', engine.options);

  const games: game.Game[] = [];
  const args = process.argv.slice(2); // all cli ars after process name
  let files: string[] = [];
  if (args.length === 1 && fs.existsSync(args[0])) {
    files.push(args[0]); // keep it simple just use file as-is
  } else {
    const globby = await import('globby'); // dynamic import as globby is esm
    files = await globby.globby(args, { expandDirectories: true, gitignore: true, deep: 2 }); // find matching files
  }
  if (files.length > 1) log.info('list', { files: files.length });
  for (const fileName of files) {
    const pgnText = fs.readFileSync(fileName, 'utf8');
    // analyze game using specified engine and from perspecitive of a specific player
    const analyzedGames: game.Game[] = await game.analyze(engine, pgnText, fileName);
    games.push(...analyzedGames);
    for (const g of analyzedGames) {
      const summary = { file: g.file, date: g.date, players: g.players, result: g.result, moves: g.moves, decided: g.decidedMove, time: g.engine?.time, acpl: [g.acpl.white, g.acpl.black] };
      if (g.totalGames > 1) summary['game'] = g.game;
      log.state({ summary, moves: g.overview }); // one-line short summary
    }
  }

  engine.terminate(); // terminate stockfish engine
  process.exit(0); // nodejs process can sometimes linger when using spawned processes
}

main();

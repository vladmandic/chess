import { readFileSync } from 'fs';
import * as log from '@vladmandic/pilogger';
import { UCI, UCIOptions } from './uci';
import { Game, processPGN } from './game';

const playerName = 'VladMandic';

const uciOptions: UCIOptions = {
  debug: false, // log uci communication
  lines: 1, // analyze n top lines
  depth: 12, // max depth per move
  maxtime: 500, // max time per move in ms
  engine: '/home/vlado/dev/chess/engine/sf15-bmi2',
  nnue: 'nn-6877cd24400e.nnue',
  options: ['Threads value 16'], // additional options to pass to engine // example ['Threads value 16', 'Hash value 128']
};

async function main() {
  log.configure({ inspect: { breakLength: 400 } });
  log.headerJson();

  const engine = new UCI(uciOptions);
  await engine.ready();
  log.state('engine', { name: engine.name, state: engine.state, info: engine.info });
  log.state('options', engine.options);

  const games: Game[] = [];
  let files: string[] = [];
  const args = process.argv.slice(2);
  const globby = await import('globby');
  files = await globby.globby(args, { expandDirectories: true, gitignore: true, deep: 2 });
  log.info({ files });
  for (const file of files) {
    const text = readFileSync(file, 'utf8');
    const pgnGames = await processPGN(engine, text, file, playerName);
    log.state({ file, games: pgnGames.length });
    games.push(...pgnGames);
    for (const game of pgnGames) {
      log.data({
        file: game.file,
        game: game.game,
        date: game.date,
        players: game.players,
        win: game.win,
        color: game.color,
        moves: game.moves,
        acpl: game.acpl,
        time: game.engine.time,
        summary: game.summary,
      });
    }
  }
  // log.data(games);

  engine.terminate();
  process.exit(0);
}

main();

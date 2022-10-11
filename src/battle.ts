import * as fs from 'fs';
import * as log from '@vladmandic/pilogger';
import * as k from 'kokopu';
import * as UCI from './uci';
import { initOpenings } from './openings';
import { playGame } from './battle-play';

export interface Config {
  maxMoves?: number,
  numGames?: number,
  solvedDepth?: number,
  initialFEN?: string,
  pgnOutput?: string,
  openings?: string,
  engineOptions: [Partial<UCI.Options>, Partial<UCI.Options>],
}

async function main() {
  log.configure({ inspect: { breakLength: 250 } });
  log.headerJson();

  const configFile = process.argv[2] || 'battle.json';
  log.info({ configFile });
  const configText = fs.readFileSync(configFile, 'utf-8');
  const config: Config = JSON.parse(configText) as Config;
  log.info('config', config);
  if (config.engineOptions.length !== 2) {
    log.error('config requires two configured engines');
    process.exit(1);
  }
  if (!config.numGames) config.numGames = 1;
  initOpenings(config.openings);

  const ew: UCI.Engine = new UCI.Engine(config.engineOptions[0]); // engine white
  await ew.init();
  log.state('engine white', { name: ew.name, type: ew.options.type, state: ew.state, info: ew.info });
  const eb: UCI.Engine = new UCI.Engine(config.engineOptions[1]); // engine black
  await eb.init();
  log.state('engine black', { name: eb.name, type: eb.options.type, state: eb.state, info: eb.info });

  if (!config.initialFEN) config.initialFEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

  let pgn: string = '';
  for (let i = 1; i <= config.numGames; i++) {
    const game = await playGame(ew, eb, i, config);
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

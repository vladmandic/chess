/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const log = require('@vladmandic/pilogger');

const output = 'src/openings.json';

const urls = [
  'https://raw.githubusercontent.com/lichess-org/chess-openings/master/dist/a.tsv',
  'https://raw.githubusercontent.com/lichess-org/chess-openings/master/dist/b.tsv',
  'https://raw.githubusercontent.com/lichess-org/chess-openings/master/dist/c.tsv',
  'https://raw.githubusercontent.com/lichess-org/chess-openings/master/dist/d.tsv',
  'https://raw.githubusercontent.com/lichess-org/chess-openings/master/dist/e.tsv',
];

async function main() {
  log.info('starting');
  const openings = [];
  for (const url of urls) {
    const res = await fetch(url);
    if (!res?.ok) {
      log.error('error', { url, error: res.error });
      continue;
    }
    const text = await res.text();
    const lines = text.split('\n');
    for (const line of lines) {
      const [eco, name, pgn, uci, epd] = line.split('\t');
      if (eco?.match(/^[A-E]/)) openings.push({ eco, name, pgn, uci, epd });
    }
  }
  const json = JSON.stringify(openings, null, 2);
  fs.writeFileSync(output, json, 'utf8');
  log.info('updated', { output, records: openings.length });
}

main();

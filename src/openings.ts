import * as fs from 'fs';
import * as log from '@vladmandic/pilogger';

export interface Opening {
  eco: string,
  name: string,
  uciMoves?: string[],
  agMoves?: string[],
  pgn?: string,
  uci?: string,
  epd?: string,
  depth?: number,
}

let openings: Opening[] = [];

const arrayStartsWith = (a: string[], b: string[]): boolean => {
  if (b.length < a.length) return false;
  let assume = true;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      assume = false;
      break;
    }
  }
  return assume;
};

export const initOpenings = (openingsFile = 'src/openings.json') => {
  if (!fs.existsSync(openingsFile)) {
    log.warn('openings file cannot be located:', openingsFile);
    return;
  }
  const text = fs.readFileSync(openingsFile, 'utf8');
  openings = JSON.parse(text);
  openings.forEach((opening) => opening.uciMoves = opening.uci?.split(' ') || []);
  openings.forEach((opening) => opening.agMoves = opening.pgn?.replace(/[0-9]?[0-9]\. /g, '').split(' ') || []);
  openings.forEach((opening) => opening.depth = opening.uciMoves?.length || 0);
};

export const getOpening = (moves: string[]) => { // takes sequence of ag/san or uci moves
  const uci = moves[0].length === 4 && moves[0][0].match(/[0-9]/) && moves[0][2].match(/[0-9]/);
  if (openings.length === 0) initOpenings();
  const best = uci
    ? openings.find((opening) => opening.uciMoves?.length === moves.length && arrayStartsWith(moves, opening.uciMoves))
    : openings.find((opening) => opening.agMoves?.length === moves.length && arrayStartsWith(moves, opening.agMoves));
  if (best) return best;
  return undefined;
};

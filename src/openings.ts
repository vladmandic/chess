import { readFileSync } from 'fs';

export interface Opening {
  eco: string,
  name: string,
  uciMoves: string[],
  agMoves: string[],
  pgn?: string,
  uci?: string,
  epd?: string,
  depth: number,
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

const initOpenings = () => {
  const text = readFileSync('src/openings.json', 'utf8');
  openings = JSON.parse(text);
  openings.forEach((opening) => opening.uciMoves = opening.uci?.split(' ') || []);
  openings.forEach((opening) => opening.agMoves = opening.pgn?.replace(/[0-9]?[0-9]\. /g, '').split(' ') || []);
  openings.forEach((opening) => opening.depth = opening.uciMoves?.length || 0);
};

export const getOpeningUCI = (moves: string[]) => {
  if (openings.length === 0) initOpenings();
  const best = openings.find((opening) => opening.uciMoves.length === moves.length && arrayStartsWith(moves, opening.uciMoves));
  if (best) return best;
  return undefined;
};

export const getOpeningAG = (moves: string[]) => {
  if (openings.length === 0) initOpenings();
  const best = openings.find((opening) => opening.agMoves.length === moves.length && arrayStartsWith(moves, opening.agMoves));
  if (best) return best;
  return undefined;
};

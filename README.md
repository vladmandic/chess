# Chess

`NodeJS` Chess Analysis using [Stockfish](https://github.com/official-stockfish/Stockfish) UCI Engine  
*(Possibly compatible with other engines, but not tested)*

## Sources

- `src/uci.ts` handles starting of the engine and communication with it
- `src/game.ts` uses engine to run move analysis and annotate results
- `src/index.ts` short app that analyzes given game(s) in [PGN format](https://www.chess.com/terms/chess-pgn)

Sources are compiled to `dist/chess.js` using `@vladmandic/build` CI tool:
> npm run prod

## Usage

> npm start samples/sample-white.pgn

```js
2022-10-05 11:43:10 INFO:  { application: '@vladmandic/chess', version: '0.1.0' }
2022-10-05 11:43:10 INFO:  { user: 'vlado', platform: 'linux', arch: 'x64', node: 'v18.10.0' }
2022-10-05 11:43:10 STATE: engine { name: 'Stockfish 15', state: 'ready', info: [ 'g++ (GNUC) 11.2.0 on Linux', '64bit BMI2 AVX2 SSE41 SSSE3 SSE2 POPCNT', 'NNUE evaluation using nn-6877cd24400e.nnue enabled' ] }
2022-10-05 11:43:10 STATE: options { lines: 1, depth: 12, maxTime: 2000, engine: '/home/vlado/dev/chess/engine/sf15-bmi2', nnue: 'nn-6877cd24400e.nnue', debug: false, maxScore: 10, options: [ 'Threads value 16' ] }
2022-10-05 11:43:10 INFO:  list { files: 1 }
2022-10-05 11:43:11 DATA:  details {
  file: 'samples/sample-white.pgn',
  game: 1,
  moves: 28,
  date: 2022-03-24T04:00:00.000Z,
  analyzed: 2022-10-05T15:43:10.556Z,
  players: [ 'VladMandic', 'Alecasux' ],
  result: '1-0',
  win: true,
  line: [
    qn { i: 1, move: 'd2d4', best: 'e2e4', score: 0.3, cpl: -0.06, color: 'white', symbol: 'd4', fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1', flags: 'ok' },
    qn { i: 1, move: 'd7d5', best: 'e7e6', score: 0.44, cpl: -0.14, color: 'black', symbol: 'd5', fen: 'rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1', flags: 'ok' },
    qn { i: 2, move: 'e2e3', best: 'c2c4', score: 0.14, cpl: 0.3, color: 'white', symbol: 'e3', fen: 'rnbqkbnr/ppp1pppp/8/3p4/3P4/4P3/PPP2PPP/RNBQKBNR b KQkq - 0 1', flags: 'good' },
    qn { i: 2, move: 'b8c6', best: 'e7e6', score: 0.68, cpl: -0.54, color: 'black', symbol: '♞c6', fen: 'r1bqkbnr/ppp1pppp/2n5/3p4/3P4/4P3/PPP2PPP/RNBQKBNR w KQkq - 0 1', flags: 'ok' },
    ...
  ],
  color: 'white',
  acpl: {
    full: 406,
    decided: 59,
  },
  pgn: [
    '[Event "Live Chess - chess"]',
    '[Site "Chess.com"]',
    '[Date "2022.03.24"]',
    '[Round "?"]',
    '[White "VladMandic"]',
    '[Black "Alecasux"]',
    '[Result "1-0"]',
    '[TimeControl "600"]',
    '[WhiteElo "1011"]',
    '[BlackElo "1037"]',
    '[Termination "VladMandic won by resignation"]',
    '',
    '1. d4 d5 2. e3 Nc6 3. Nf3 e6 4. c4 dxc4 5. Bxc4 Bd7 6. O-O Nf6 7. Nc3 Bd6 8. a3',
    'O-O 9. b4 a6 10. Bb2 b5 11. Bb3 e5 12. Qc2 e4 13. Nd2 g6 14. Ncxe4 Bf5 15. d5',
    'Ne7 16. Bxf6 c5 17. bxc5 Bxc5 18. Qxc5 Re8 19. d6 Bxe4 20. Nxe4 Rc8 21. dxe7 Qc7',
    '22. Qxc7 Rxc7 23. Nd6 Rcxe7 24. Nxe8 Rxe8 25. Rfd1 Kf8 26. Rd8 Rxd8 27. Bxd8 Ke8',
    '28. Ba5 1-0',
    ''
  ],
  summary: {
    full: { best: 9, blunder: 6, mistake: 1, inaccurate: 2, good: 6, great: 2 },
    decided: { best: 4, blunder: 1, mistake: 1, inaccurate: 2, good: 6, great: 0 },
  }
}
```

## References
- [UCI Protocol Specs](uci-protocol.md)
- [UCI Commands for Stockfish](uci-stockfish.md)

## Links
- [Stockfish Binaries](https://stockfishchess.org/download/)
- [Stockfish GitHub](https://github.com/official-stockfish/Stockfish)

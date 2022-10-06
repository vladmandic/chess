# Chess

`NodeJS` Chess Battles & Analysis using  UCI Engine

*Note: Before using, download one more engines using links below*
*Tested using Stockfish and LCZero, but likely compatibile with other UCI chess engines
## Apps

- `src/analyze.ts` => `dist/analyze.js`   
  app that analyzes given game(s) in [PGN format](https://www.chess.com/terms/chess-pgn)  
  *run:*
  > npm run analyze sample/sample-white.pgn

- `src/battle.ts` => `dist/battle.js`  
  app that pairs two engines against each other and generates a game [PGN](https://www.chess.com/terms/chess-pgn)  
  *run:*
  > npm run battle

Note: all sources are compiled using `@vladmandic/build` CI tool
> npm run prod

### Code

- `src/uci.ts`  
  handles starting of the engine and communication with it
- `src/game.ts`
  analyzes pgn  
  generates and translates individual moves  
  sends moves to engine and to be analyzed  
  annotate results  
- `src/openings.ts`  
  library of game openings  

<br>

## Docs
- [UCI Protocol Specs](docs/uci-protocol.md)
- [UCI Commands for Stockfish](docs/uci-stockfish.md)
- [UCI Options for Stockfish and LCZero](docs/uci-options.md)

## Links
- [Stockfish Binaries](https://stockfishchess.org/download/)
- [Stockfish Sources](https://github.com/official-stockfish/Stockfish)
- [Leela Chess Zero Binaries](https://lczero.org/play/download/)
- [Leela Chess Zero Sources](https://github.com/LeelaChessZero/lc0)
- [ECO Openings Codes Table](https://www.chessjournal.com/eco/)
- [What is NNUE](https://www.chessprogramming.org/NNUE)

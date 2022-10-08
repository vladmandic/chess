# Chess Engine Battles & Analysis

Written in **TypeScript**, using **UCI Engine** and managed from **NodeJS**

Tested using [Stockfish](https://stockfishchess.org/) and [LCZero](https://lczero.org/), but likely compatibile with other UCI chess engines  
*Note: Before using, download one more engines using links below*  

## Apps

### Analyze

  > npm run analyze sample/sample-white.pgn

  Runs every move through the chess engine
  Generates per-move centipawn loss, average centipawn loss, looks up openings according to ECO database, finds missed mates, notes mistakes/blunders/etc.  
  Optionally looks up Syzygy end-game tablebases  
  Can be used to analyze single game or run in batch

### Battle

  > npm run battle

  Initializes two UCI engines given specific options and runs number of simulated gam from either default or given position  
  Looks up openings used according to ECO database and further annotates games as they are played  
  Optionally looks up Syzygy end-game tablebases  
  Generates final output in [PGN format](https://www.chess.com/terms/chess-pgn)  

<br>

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
- `src/battle.ts` => `dist/battle.js`  
  app that pairs two engines against each other and generates a game [PGN](https://www.chess.com/terms/chess-pgn)  
  *run:*
- `src/analyze.ts` => `dist/analyze.js`   
  app that analyzes given game(s) in [PGN format](https://www.chess.com/terms/chess-pgn)  
  *run:*

Note: all sources are compiled using `@vladmandic/build` CI tool
> npm run prod

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
- [Syzygy endgame tablebases](https://syzygy-tables.info/)

## Todo

More UCI Engines:
- <https://github.com/jhonnold/berserk>

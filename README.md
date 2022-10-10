# Chess Engine Battles & Analysis

Written in **TypeScript**, using **UCI Engine**, managed from **NodeJS**

Tested using [Stockfish](https://stockfishchess.org/), [LCZero](https://lczero.org/) and [Beserk](https://github.com/jhonnold/berserk), but likely compatibile with other UCI chess engines  
*Note: Before using, download one more engines*  

## Modes

### **Analyze**

  > npm run analyze sample/sample-white.pgn

- Runs every move through the chess engine
- Calculates per-move centipawn loss,  
  average centipawn loss,  
  looks up openings according to ECO database,  
  finds missed mates,  
  notes mistakes/blunders/etc.  
- Optionally looks up Syzygy end-game tablebases  
- Can be used to analyze single game or run in batch

### **Battle**

  > npm run battle

- Initializes two UCI engines given specific options in `battle.json`  
  and runs number of simulated games from either default or given position  
- Looks up openings used according to ECO database  
  and further annotates games as they are played  
- Optionally looks up Syzygy end-game tablebases  
- Generates final output in [PGN format](https://www.chess.com/terms/chess-pgn)  

<br>

## Code

- `src/uci.ts`  
  handles initialization and all communication with the engine  
- `src/game.ts`  
  analyzes pgn  
  generates and translates individual moves  
  sends moves to engine and to be analyzed  
  annotate results  
- `src/generate-openings.js` => `openings.json`  
  downloads latest eco openings and generates database  
- `src/battle.ts` => `dist/battle.js`  
  app that pairs two engines against each other and generates a game [PGN](https://www.chess.com/terms/chess-pgn)  
- `src/analyze.ts` => `dist/analyze.js`   
  app that analyzes given game(s) in [PGN format](https://www.chess.com/terms/chess-pgn)  

*Note*: All sources are compiled using `@vladmandic/build` *CI tool*
> npm run build

<br>

## Docs
- [UCI Protocol Specs](docs/uci-protocol.md)
- [UCI Commands for Stockfish](docs/uci-stockfish.md)
- [UCI Options for Stockfish and LCZero](docs/uci-options.md)
- [PGN Format Specification](docs/pgn-specs.md)
- [ECO Chess Openings](https://github.com/lichess-org/chess-openings)

## Links
- [Stockfish Binaries](https://stockfishchess.org/download/)
- [Stockfish Sources](https://github.com/official-stockfish/Stockfish)
- [Leela Chess Zero Binaries](https://lczero.org/play/download/)
- [Leela Chess Zero Sources](https://github.com/LeelaChessZero/lc0)
- [Syzygy endgame tablebases](https://syzygy-tables.info/)

## Todo

- Cleanup absolute-to-relative paths
- Remove local-tree dependencies
- Allow battles with starting FEN
- Debug UCI hangs or exceptions
- Built-in test UCI engine

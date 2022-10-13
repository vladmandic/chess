# Chess Engine Battles & Analysis

Written in **TypeScript**, using **UCI Engine**, managed from **NodeJS**

Tested using [Stockfish](https://stockfishchess.org/), [LCZero](https://lczero.org/), [Beserk](https://github.com/jhonnold/berserk) and [SmallBrain](https://github.com/Disservin/Smallbrain) for Windows and Linux  
Also compatibile with **Stockfish WASM** ports like [1](https://github.com/lichess-org/stockfish.wasm) or [2](https://github.com/hi-ogawa/Stockfish)  


## Modes

### **Analyze**

  > npm run analyze sample/sample-white.pgn

- Initializes UCI engine given specific options in `analyze.json`  
  *Note: default is built-in lightweight **Stockfish Classic WASM***  
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

## Engine Configuration Examples

as used in `analyze.json` and `battle.json`...

```json
// stockfish 15 with nnue and syzygy database
{ "maxTime": 25, "engine": "engine/stockfish-15/sf15-bmi2", "nnue": "nn-6877cd24400e.nnue", "syzygy": "engine/syzygy" }, 
// stockfish 11 small // included!
{ "maxTime": 25, "engine": "engine/stockfish-11/stockfish_20011801_linux" }, 
// beserker 10 with nnue
{ "maxTime": 25, "engine": "engine/beserk/berserk-10-x64-avx2.exe", "nnue": "engine/beserk/berserk-c982d9682d4e.nn" }
// lczero with cuda execution
{ "maxTime": 25, "engine": "engine/leela/lc0-0.28.2-cuda.exe" },
// tiny stockfish classical as wasm from lichess-org // included!
{ "depth": 10, "engine": "../engine/lichess-org/stockfish.js", "type": "wasm" }
// full stockfish classical as wasm from hi-ogawa
{ "depth": 10, "engine": "../engine/hi-ogawa/stockfish.js", "type": "wasm" }
```

<br>

## Code

- `src/battle.ts` => `dist/battle.js`  
  app that pairs two engines against each other and generates a game [PGN](https://www.chess.com/terms/chess-pgn)  
  - `src/battle-play.ts` module  
    runs moves for both engines  
    annotates each moves  

- `src/analyze.ts` => `dist/analyze.js`   
  app that analyzes given game(s) in [PGN format](https://www.chess.com/terms/chess-pgn)  
  - `src/analyze-game.ts` module  
    analyzes pgn  
    generates and translates individual moves  
    sends moves to engine and to be analyzed  
    annotate results  

- `src/uci.ts`  
  class that handles uci protocol communication  
  - `src/engine.ts`  
    initializes process-based on wasm-based engine  
    and creates input/output channel  

- `src/generate-openings.js` => `openings.json`  
  downloads latest eco openings and generates database  

*Note*: All sources are compiled using `@vladmandic/build` *CI tool*
> npm run build

<br>

## WASM .vs. External Process

- **WASM**  
  Stockfish modules can be dynamically imported and used, but with some limitations as execution is still primarily single-threaded  
  As a result, do not rely on engine `maxTime` parameter as engine may not be able to respond to stop analysis requests after specific time  
  Instead, set reasonable value for `depth` parameter which automatically finishes move analysis as desired depth is reached  

  For the same reason, **threads** and **nnue** options are currently not supported  

  But this is simplest option to try this library as simple **Stockfish WASM** engine is included in the distribution  
  Also this allows for execution on otherwise unsupported platforms where UCI binaries may not be readily available  

- **External Process**
  Execution is much more flexible as each process runs independently  
  Just make sure to download binaries that can be executed on your platform!  

  Btw, if you're using **WSL**, you can use *either* Linux or Windows builds without differences  
  since Stockfish is statically linked and process spawning will handle it automatically

<br>

## ECO and Syzygy Databases

- ECO chess openings database is automatically generated from [LiChess Repository](https://github.com/lichess-org/chess-openings)
- Syzygy endgame tablebases are provided for 4-move combination, but you can provide any variation up to massive [7-move solutions](https://syzygy-tables.info/)

<br>

## Docs
- [UCI Protocol Specs](docs/uci-protocol.md)
- [UCI Commands for Stockfish](docs/uci-stockfish.md)
- [UCI Options for Stockfish and LCZero](docs/uci-options.md)
- [PGN Format Specification](docs/pgn-specs.md)
- [ECO Chess Openings](https://github.com/lichess-org/chess-openings)

## Todo

- Remove local-tree dependencies

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
  App analyzes both opening in specific-move order, but also transforms as specific book positions have been reached  
  For example, in a sample game opening **Caro-Kann Defense: Accelerated Panov Attack**  
  after several moves transformed into position **Scandinavian Defense: Panov Transfer**  
- Syzygy endgame tablebases are provided for *4-move combination*, but you can provide any variation up to massive [7-move solutions](https://syzygy-tables.info/) [16.7TB]  

<br>

## Docs
- [UCI Protocol Specs](docs/uci-protocol.md)
- [UCI Commands for Stockfish](docs/uci-stockfish.md)
- [UCI Options for Stockfish and LCZero](docs/uci-options.md)
- [PGN Format Specification](docs/pgn-specs.md)
- [ECO Chess Openings](https://github.com/lichess-org/chess-openings)

## Samples

> Analyze

```js
engine { name: 'Stockfish 15', state: 'ready', info: [ 'g++ (GNUC) 11.2.0 on Linux', 'Found 35 tablebases', 'NNUE evaluation using nn-6877cd24400e.nnue enabled' ] }
options { lines: 3, depth: 15, maxTime: 100, engine: 'engine/stockfish-15/sf15-bmi2', nnue: 'nn-6877cd24400e.nnue', syzygy: 'engine/syzygy', debug: false, verbose: true, maxScore: 10, options: [], type: 'process' }
move 1 w { ag: 'd4', move: 'd2d4', options: { e2e4: 0.5, '*d2d4': 0.46 }, fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1', opening: "A40: Queen's Pawn Game", pieces: 32, cpl: 0.78, score: -0.28, flags: 'good' }
move 1 b { ag: 'g6', move: 'g7g6', options: { c2c4: -0.28, e2e4: -0.22, d2d4: -0.2 }, fen: 'rnbqkbnr/pppppp1p/6p1/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1', opening: 'A40: Modern Defense', pieces: 32, cpl: 1.03, score: 0.75, flags: 'inaccurate' }
...
{
  summary: { file: 'games/Orlok-Tsubodai_vs_VladMandic_2022.11.14.pgn', date: 2022-11-14T05:00:00.000Z, players: [ 'Orlok-Tsubodai', 'VladMandic' ], result: '0-1', moves: 26, decided: 23, time: 4878, acpl: [ 411, 464 ] },
  moves: {
    white: { best: 5, blunder: 2, mistake: 2, inaccurate: 4, good: 6, great: 1 },
    black: { best: 8, blunder: 0, mistake: 0, inaccurate: 4, good: 5, great: 2 },
  }
}
```

> Battle


```js
engine white { name: 'Stockfish 11 64 POPCNT', type: 'process', state: 'ready', info: [ 'g++ (GNUC) 7.4.0 on Linux' ] }
engine black { name: 'Stockfish SF_classical 64 POPCNT', type: 'wasm', state: 'ready', info: [ 'clang++ 13.0.0 on unknown system' ] }
starting game { round: 1, side: 'w', fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1' }
{ turn: 1, side: 'w', move: 'e2e4', fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1', time: 188, depth: 15, pieces: 32, opening: { eco: 'B00', name: "King's Pawn" }, score: 0.65 }
{ turn: 1, side: 'b', move: 'c7c6', fen: 'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1', time: 168, depth: 15, pieces: 32, opening: { eco: 'B10', name: 'Caro-Kann Defense' }, score: 0.28 }
{ turn: 2, side: 'w', move: 'c2c4', fen: 'rnbqkbnr/pp1ppppp/2p5/8/2P1P3/8/PP1P1PPP/RNBQKBNR b KQkq - 0 1', time: 182, depth: 15, pieces: 32, opening: { eco: 'B10', name: 'Caro-Kann Defense: Accelerated 7 }
{ turn: 2, side: 'b', move: 'd7d5', fen: 'rnbqkbnr/pp2pppp/2p5/3p4/2P1P3/8/PP1P1PPP/RNBQKBNR w KQkq - 0 1', time: 89, depth: 15, pieces: 32, opening: { eco: 'B10', name: 'Caro-Kann Defense: Accelerated  }
{ turn: 3, side: 'w', move: 'e4d5', fen: 'rnbqkbnr/pp2pppp/2p5/3P4/2P5/8/PP1P1PPP/RNBQKBNR b KQkq - 0 1', time: 85, depth: 15, pieces: 31, capture: 'bp', score: 0.5 }
{ turn: 3, side: 'b', move: 'g8f6', fen: 'rnbqkb1r/pp2pppp/2p2n2/3P4/2P5/8/PP1P1PPP/RNBQKBNR w KQkq - 0 1', time: 109, depth: 15, pieces: 31, position: { eco: 'B01', name: 'Scandinavian Defense: Panov 
...
{ turn: 153, side: 'w', move: 'h4h3', fen: '8/K7/8/8/8/3k3R/1r6/8 b - - 0 1', time: 0, depth: 15, pieces: 4, repeat: 3, check: true, score: 0 }
pgn { file: 'samples/battle.pgn' }
```
```text
[Event "battle"]
[Site "https://github.com/vladmandic/chess"]
[Date "2022.11.15"]
[Round "1"]
[White "stockfish 11 64 popcnt"]
[Black "stockfish sf_classical 64 popcnt"]
[Result "1/2-1/2"]
[Annotator "https://github.com/vladmandic/chess"]
[BlackTitle "depth:15 maxtime:250 nodes:20265976 usedTime:7913ms"]
[ECO "B10"]
[Opening "Caro-Kann Defense: Accelerated Panov Attack => Scandinavian Defense: Panov Transfer"]
[PlyCount "305"]
[Termination "3-fold repetition"]
[WhiteTitle "depth:15 maxtime:250 nodes:26424584 usedTime:7143ms"]
```
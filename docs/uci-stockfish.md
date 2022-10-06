# UCI Protocol

For Stockfish

## List of UCI Commands

```
quit            exit stockfish
stop            halt move search
ponderhit       start search (ponder) on same move user has played
uci             tell engine to use UCI interface (will display options)
setoption       set specific UCI option
go              start move search based on current position
ucinewgame      start move search on new/different game
isready         response is `ready` if engine is ready and available
flip            flip sides
bench           calculate/display benchmarks for this installation of stockfish
d               display chess board and current position of all pieces
eval            display current NNUE evaluation
compiler        display info re:compiler used for this installation of stockfish
export_net      save current stockfish neural network to file
position        set up position in festering or use startups
```

## Description of UCI Commands

### `quit`  
quit the program as soon as possible

### `stop`  
stop calculating as soon as possible, dont forget
the `bestmove` and possibly the `ponder` token when finishing the search

### `ponderhit`  
the user has played the expected move. This will be sent if the engine was told
to ponder on the same move the user has played.
The engine should continue searching but switch from pondering to normal search.

### `uci`  
tell engine to use the uci (universal chess interface).
This will be sent once, by a GUI, as a first command after program boot
to tell the engine to switch to uci mode.

after receiving the uci command the engine must identify itself with
the `id` command and send the `option` commands to tell the GUI which
engine settings the engine supports (if any).

after that the engine should send `uciok` to acknowledge the uci mode.
If no uciok is sent within a certain time period, the engine task will
be killed by the GUI.

### `setoption`

> setoption name `id` [value `x`]

this is sent to the engine when the user wants to change the internal parameters
of the engine. For the `button` type no value is needed.  
one string will be sent for each parameter and this will only be sent
when the engine is waiting.  
the name and value of the option in `id` should not be case sensitive and
can include spaces.  
the substrings `value` and `name` should be avoided in `id` and `x` to allow
unambiguous parsing, for example do not use `name = `draw value``.

Here are some examples:

    setoption name Nullmove value true  
    setoption name Selectivity value 3  
    setoption name Style value Risky  
    setoption name Clear Hash  
    setoption name NalimovPath value c:\chess\tb\4;c:\chess\tb\5\n  

### `go`  
start calculating on the current position set up with the `position`
command.  
there are a number of parameters that can follow this command and all
will be sent in the same string.  
if one parameter is not sent its value should be interpreted as it would
not influence the search.  
the following are the parameters and their associated values

> go parameters

* `searchmoves move1 .... movei`  
        restrict search to these moves only
        Example: After `position startpos` and `go infinite searchmoves e2e4 d2d4`
        the engine should only search the two moves e2e4 and d2d4 in the
        initial position.
* `ponder`  
        start searching in pondering mode.
        Do not exit the search in ponder mode, even if its mate!
        This means that the last move sent in in the position string
        is the ponder move.  The engine can do what it wants to do, but
        after a `ponderhit` command it should execute the suggested move
        to ponder on.  
        This means that the ponder move sent by the GUI can be
        interpreted as a recommendation about which move to ponder.
        However, if the engine decides to ponder on a different move, it
        should not display any mainlines as they are likely to be
        misinterpreted by the GUI because the GUI expects the engine
        to ponder on the suggested move.
* `wtime x`  
        white has x msec left on the clock
* `btime x`  
        black has x msec left on the clock
* `winc x`  
        white increment per move in mseconds if x > 0
* `binc x`  
        black increment per move in mseconds if x > 0
* `movestogo x`  
        there are x moves to the next time control
        NOTE: this will only be sent if x > 0, if you dont get this
              and get the wtime and btime its sudden death
* `depth x`  
        search x plies only.
* `nodes x`  
        search x nodes only
* `mate  x`  
        search for a mate in x moves
* `movetime x`  
        search exactly x mseconds
* `infinite`  
        search until the `stop` command. Do not exit the
        search without being told so in this mode!

### `ucinewgame`  
this is sent to the engine when the next search (started with `position` and
`go`) will be from a different game.  
This can be a new game the engine should
play or a new game it should analyse but also the next position from a testsuite
with positions only.

If the GUI hasnt sent a `ucinewgame` before the first `position` command,
the engine shouldnt expect any further ucinewgame commands as the GUI is
probably not supporting the ucinewgame command.

So the engine should not rely on this command even though all new GUIs should
support it.

As the engines reaction to `ucinewgame` can take some time the GUI should
always send `isready` after `ucinewgame` to wait for the engine to finish
its operation. The engine should respond with `readyok`

### `isready`  
This is used to synchronize the engine with the GUI.
When the GUI has sent a command or multiple commands that can take some time
to complete, this command can be used to wait for the engine to be ready again
or to ping the engine to find out if it is still alive.

e.g. this should be sent after setting the path to the tablebases as this
can take some time.

This command is also required once, before the engine is asked to do any
searching, to wait for the engine to finish initializing.

This command must always be answered with `readyok` and can be sent also when
the engine is calculating in which case the engine should also immediately
answer with `readyok` without stopping the search.

### `flip`  
Flip sides in the current game

### `bench`  
calculate/display benchmarks for this installation of stockfish

### `d`  
display chess board and current position of all pieces

### `eval`  
display current NNUE evaluation

### `compiler`  
display information about the compiler use for this installation of stockfish

### `export_net`  
save current stockfish neural network to file

### `position`  
> position [fen `fenstring` | startpos ]  moves `move1 .... movei`  

Set up the position described in fenstring on the internal board and
play the moves on the internal chess board.

If the game was played  from the start position the string `startpos`
must be sent

Note: no `new` command is needed. However, if this position is from
a different game than the last position sent to the engine, the GUI
should have sent a `ucinewgame` in between.

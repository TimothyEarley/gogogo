@file:OptIn(ExperimentalTime::class)

package de.earley.gogogo.ai

import de.earley.gogogo.game.*
import kotlinx.coroutines.delay
import kotlin.time.Duration
import kotlin.time.Duration.Companion.seconds
import kotlin.time.ExperimentalTime
import kotlin.time.TimeMark
import kotlin.time.TimeSource

private const val MIN = -1000
private const val MAX = 1000

class Lague(
    private val debug: Boolean = false,
    private val evaluation: Evaluation,
    private val depth: Int,
    /**
     * At the end of the search, go further but only picking the most forward move for the player
     *    costly, but maybe beneficial
     */
    private val useForwardFinish: Boolean = true,
    private val extraDashDepth: Int = 3,
    private val useTranspositionTable: Boolean = true,
    private val useIterativeDeepening: Boolean = false,
    /**
     * for iterative deepening
     */
    private val timeout: Duration = 1.seconds,
    comment: String = "",
    private val stateTransform : (State) -> State = { it }
) : AI(
    "Lague@$depth${
        listOfNotNull(
            "ff".takeIf { useForwardFinish },
            "tt".takeIf { useTranspositionTable },
            "it".takeIf { useIterativeDeepening })
    }+${evaluation.name} $comment"
) {

    private class Context(
        var bestLine: Line? = null,
        val stats: Stats = Stats(),
        var abort: Boolean = false,
        val endTime: TimeMark? = null
    )

    private val transpositionTable : TranspositionMemory = TranspositionHashMap()

    private val timeSource: TimeSource = TimeSource.Monotonic

    private fun Line.isMateLine(): Boolean = evaluation >= MAX || evaluation <= MIN

    override suspend fun calculateMove(state: State): MoveResponse {
        val myState = stateTransform(state)
        val ctx = Context(endTime = timeSource.markNow() + timeout)
        if (useIterativeDeepening) {
            var bestLine: Line? = null
            for (searchDepth in 1 until Int.MAX_VALUE) {
                ctx.bestLine = null // reset for next iteration
                myState.evaluateSearch(ctx, 0, searchDepth, MIN, MAX, null)
                if (ctx.abort) break
                bestLine = ctx.bestLine
                // yield does not work, we need to delay for some time
                delay(1)
                ctx.stats.depthReached = searchDepth
                if (ctx.bestLine?.isMateLine() == true) {
                    break
                }
            }
            ctx.bestLine = bestLine
        } else {
            myState.evaluateSearch(ctx, 0, depth, MIN, MAX, null)
            ctx.stats.depthReached = depth
        }

        val line = ctx.bestLine ?: Line.fromMove(myState.possibleMoves.random(), -1).also {
            println("WARNING: no move found for ${myState.playersTurn} in")
            println(myState.renderText())
        }

        if (debug) {
            println(ctx.stats)
            println("Chosen line: $line")
        }

        if (useTranspositionTable) {
            //TODO win condition seems wrong

            // recreate some lines from memory
            fun recreateLine(depth: Int): Line {
                val entry = transpositionTable.lookupEvaluation(ctx.stats, myState, 0, MIN, MAX) ?:
                    return Line(0, null, null, emptyList())
                if (depth == 0) return Line.fromMove(entry.move, entry.value)
                return myState.withMove(entry.move) { recreateLine(depth - 1) }.let {
                    Line(entry.value, it.movesToWin, it.winner, listOf(entry.move) + it.moves)
                }
            }

            val lines = myState.possibleMoves.map {
                myState.withMove(it) { recreateLine(5) }.prependAndInvert(it)
            }
            return MoveResponse(line.moves.first(), lines)
        }

        return MoveResponse(line.moves.first(), listOf(line))
    }

    private fun State.evaluateSearch(
        ctx: Context,
        plyFromRoot: Int,
        depth: Int,
        alpha: Int,
        beta: Int,
        makeDash: Player?
    ): Int {
        if (ctx.abort) return 0
        if (useIterativeDeepening && ctx.endTime!!.hasPassedNow()) {
            ctx.abort = true
            return 0
        }

        ctx.stats.iterations++

        if (useTranspositionTable) {
            val ttLookup = transpositionTable.lookupEvaluation(ctx.stats, this, depth, alpha, beta)
            if (ttLookup != null) {
                ctx.stats.transpositions++
                if (plyFromRoot == 0) {
                    ctx.bestLine = Line.fromMove(ttLookup.move, ttLookup.value)
                }
                return ttLookup.value
            }
        }

        if (depth == 0) {
            ctx.stats.evaluated++
            return if (useForwardFinish && makeDash == null) {
                evaluateSearch(ctx, plyFromRoot, extraDashDepth, alpha, beta, playersTurn)
            } else {
                evaluation.eval(playersTurn, this)
            }
        }

        if (victor == playersTurn.next()) {
            ctx.stats.finished++
            return MIN
        } else if (victor == playersTurn) {
            ctx.stats.finished++
            return MAX
        }

        var bestLineInPosition = Line(alpha, null, null, emptyList())

        var candidates = possibleMoves.sortedByDescending(moveOrdering())

        if (makeDash == playersTurn) {
            //prevent bad forwards?
            val eval = evaluation.eval(playersTurn, this)
            if (eval >= beta) {
                return beta
            }
            bestLineInPosition = bestLineInPosition.copy(evaluation = maxOf(bestLineInPosition.evaluation, eval))

            candidates = listOfNotNull(candidates.filter {
                when (playersTurn) {
                    Player.Red -> it.to.x < it.from.x
                    Player.Blue -> it.to.x > it.from.x
                }
            }.maxByOrNull {
                when (playersTurn) {
                    Player.Red -> -it.to.x
                    Player.Blue -> it.to.x
                }
            })

            if (candidates.isEmpty()) {
                return bestLineInPosition.evaluation
            }
        }

        var evalKind: EntryKind = EntryKind.UpperBound

        for (move in candidates) {
            val eval = withMove(move) {
                -evaluateSearch(
                    ctx,
                    plyFromRoot + 1,
                    depth - 1,
                    -beta,
                    -bestLineInPosition.evaluation,
                    makeDash
                )
            }
            if (ctx.bestLine == null && plyFromRoot == 0) {
                // have something to fall back to
                ctx.bestLine = Line.fromMove(move, eval)
            }
            if (eval >= beta) {
                // move was too good, opponent will avoid
                if (useTranspositionTable) {
                    transpositionTable.store(this, depth, EntryKind.LowerBound, beta, move)
                }
                ctx.stats.pruned++
                return beta
            }

            if (eval > bestLineInPosition.evaluation) {
                evalKind = EntryKind.Exact
                bestLineInPosition = Line.fromMove(move, eval)
                if (plyFromRoot == 0) {
                    ctx.bestLine = bestLineInPosition
                }
            }
        }

        if (useTranspositionTable && bestLineInPosition.moves.isNotEmpty()) {
            transpositionTable.store(
                this,
                depth,
                evalKind,
                bestLineInPosition.evaluation,
                bestLineInPosition.moves.first()
            )
        }

        return bestLineInPosition.evaluation
    }

    private fun State.moveOrdering(): (Move) -> Int? {
        val hashedMove = transpositionTable.getValidMove(this)
        return {
            var score = 0

            if (useTranspositionTable && it == hashedMove) {
                score += 10000
            }

            // push piece
            if (tokenAt(it.to) == playersTurn.next()) {
                score += 10
            }

            // most forward
            score += when (playersTurn) {
                Player.Red -> GAME_WIDTH - 1 - it.to.x
                Player.Blue -> it.to.x
            }

            score
        }
    }
}
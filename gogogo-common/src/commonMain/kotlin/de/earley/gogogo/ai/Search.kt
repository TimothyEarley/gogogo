package de.earley.gogogo.ai

import de.earley.gogogo.game.*
import kotlin.contracts.ExperimentalContracts
import kotlin.contracts.contract

private const val GOOD = 1_000_000
private const val BAD = -1_000_000

private class Stats {
    var iterations: Int = 0
    var finished: Int = 0
    var pruned: Int = 0
    var hashFound: Int = 0
    var hashUsed: Int = 0

    override fun toString(): String = "iterations=$iterations, game overs=$finished, pruned=$pruned, hashFound=$hashFound, hashUsed=$hashUsed"
}

private typealias Hash = Int

private data class StoredLine(
        val line: Line,
        val atDepth: Int,
        val forPlayer: Player,
)

class Search(
        private val depth: Int,
        private val evaluation: Evaluation,
        private val pruning: Boolean,
        private val debug: Boolean = false,
        private val useMemory: Boolean = true
) : AI("Search@$depth${if (pruning) "(pruning)" else ""}+${evaluation.name}") {

    private val memory: MutableMap<Hash, StoredLine> = mutableMapOf()

    override fun calculateMove(state: State): MoveResponse {

        // TODO don't clear the cache
        memory.clear()
        val stats = Stats()

        // TODO find some more lines (maybe in mem?)
        //TODO iterative deepening
        val line = state.search(stats, depth, BAD, GOOD)

        if (debug) {
            println(stats)
            println("Chosen line: $line")
            println("Memory: ${memory.size}")
        }

        val move = line.moves.first()
        return MoveResponse(move, listOf(line))
    }

    private fun moveOrdering(player: Player): (Move) -> Int {
        // a push forward is usually good
        return when (player) {
            Player.Red -> {
                // go left
                { it.from.x - it.to.x }
            }
            Player.Blue -> {
                // go right
                { it.to.x - it.from.x }
            }
        }
    }

    // TODO estimate beta to update it
    // TODO instead of evaluating, can we check for forcing moves? I.e. what happens if we push our furthest piece
    private fun State.search(stats: Stats, depth: Int, alpha: Int, beta: Int): Line {
        if (victor != null) {
            stats.finished++
            return if (victor == playersTurn) Line(GOOD, 0, playersTurn, emptyList())
            else Line(BAD, 0, playersTurn.next(), emptyList())
        }

        val hash = hashCode()
        if (useMemory) {
            val stored = memory[hash]
            if (stored != null) {
                stats.hashFound++
                if (stored.atDepth >= depth && stored.forPlayer == playersTurn) {
                    stats.hashUsed++

                    return stored.line
                }
            }
        }

        stats.iterations++
        if (depth <= 0) {
            return Line(evaluation.eval(playersTurn, this), null, null, emptyList())
        }

        var best: Line? = null

        for (move in possibleMoves.sortedBy(moveOrdering(playersTurn))) {
            val line = withMove(move) {
                search(stats, depth - 1, -beta, -(best?.evaluation ?: alpha)).prependAndInvert(move)
            }

            if (pruning && line.evaluation >= beta) {
                stats.pruned++
                // move was too good, opponent will avoid this
                //TODO add to mem
                return line
            }

            if (best == null) {
                best = line
            } else {
                // better if:
                // 1. The value is better
                // 2. We are winning and the mate is faster
                // 3. We are loosing and the mate is slower
                val betterValue = line.evaluation > best.evaluation
                val betterMate = line.winner == playersTurn &&
                        (line.movesToWin ?: Int.MAX_VALUE) < (best.movesToWin ?: Int.MAX_VALUE)
                val worseOpponentMate =
                        line.winner == playersTurn.next() &&
                                (line.movesToWin ?: Int.MAX_VALUE) > (best.movesToWin ?: Int.MAX_VALUE)

                if (betterValue ||betterMate || worseOpponentMate) {
                    best = line
                }
            }
        }

        require(best != null) {
            "Did not find any move!"
        }

        if (useMemory) {
            memory[hash] = StoredLine(best, depth, playersTurn)
        }

        return best
    }

}

@OptIn(ExperimentalContracts::class)
private inline fun <T> State.withMove(move: Move, block: () -> T): T {
    contract { callsInPlace(block, kotlin.contracts.InvocationKind.EXACTLY_ONCE) }
    val result = move(move)
    require(result is MoveResult.Success) {
        "Tried to perform an illegal move. Got: $result"
    }
    try {
        return block()
    } finally {
        undo()
    }
}
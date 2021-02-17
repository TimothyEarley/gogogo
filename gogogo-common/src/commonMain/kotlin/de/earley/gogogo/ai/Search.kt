package de.earley.gogogo.ai

import de.earley.gogogo.game.*

private const val GOOD = 1_000_000
private const val BAD = -1_000_000

class Search(
    private val depth: Int = 5,
    private val evaluation: Evaluation = Evaluations.countTokens
) : AI("Min-Max") {


    override fun calculateMove(state: State): Pair<Move, List<Line>?> {
        val lines = evaluateMoves(state).sortedByDescending { it.evaluation }
        val move = lines.first().moves.first()
        return move to lines
    }

    private fun evaluateMoves(state : State) : List<Line> =
        state.possibleMoves.sortedBy(moveOrdering(state.playersTurn)).map { move ->
            state.withMove(move) {
                state.search(depth, BAD, GOOD).prependAndInvert(move)
            }
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
    // TODO transposition table
    // TODO instead of evaluating, can we check for forcing moves? I.e. what happens if we push our furthest piece
    private fun State.search(depth: Int, alpha: Int, beta: Int): Line {
        if (depth <= 0) {
            return Line(evaluation(playersTurn, this), emptyList())
        }

        if (victor != null) {
            return if (victor == playersTurn) Line(GOOD, emptyList())
            else Line(BAD, emptyList())
        }

        var best = Line(alpha, emptyList())

        possibleMoves
            .sortedBy(moveOrdering(playersTurn))
            .forEach { move ->
                val line = withMove(move) {
                    search(depth - 1, -beta, -best.evaluation).let {
                        it.prependAndInvert(move)
                    }
                }

                if (line.evaluation >= beta) {
                    // move was too good, opponent will avoid this
                    return Line(beta, line.moves)
                }

                if (line.evaluation > best.evaluation) {
                    best = line
                }
            }

        return best
    }

}

private inline fun <T> State.withMove(move : Move, block : () -> T) : T {
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
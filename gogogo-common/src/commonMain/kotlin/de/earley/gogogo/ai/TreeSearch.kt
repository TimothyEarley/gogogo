package de.earley.gogogo.ai

import de.earley.gogogo.game.*

private const val MAX = 1000
private const val MIN = -1000

// how many options to consider
private const val OPTIONS = 3

class TreeSearch(
    private val level: Int,
    private val baseStrategy: Evaluation,
    private val pruning: Boolean,
    private val pruneLevelMax: Int = 0,
    private val pruneLevelMin: Int = -pruneLevelMax
) : PlayerController {
    override val name: String = "tree search level $level (pruning=$pruning)"

    override suspend fun getMove(
        lastMove: Move?,
        state: State,
        fromSelectCallback: (Point?) -> Unit
    ): Pair<Move, List<Line>?> {
        val lines = treeSearch(level, state)

        //TODO what happens if null
        val bestMove = lines.maxByOrNull { it.evaluation }
        if (bestMove == null) {
            println("NULL")
            println(lines)
            println(state)
            error("NO MOVE")
        }
        return bestMove.moves.first() to lines
    }

    // assume it is my turn
    private fun treeSearch(
        currentLevel: Int,
        state: State,
    ): List<Line> {

        if (state.victor != null) {
            return listOf(
                Line(
                    evaluation = if (state.playersTurn == state.victor) MAX else MIN,
                    moves = emptyList()
                )
            )
        }

        if (currentLevel == 0) return state.findAllMoves().map {
            val evaluation = baseStrategy(state.playersTurn, state)
            Line(
                evaluation = evaluation,
                moves = listOf(it.move)
            )
        }.toList()

        if (pruning) {
            val currentPositionEvaluation = baseStrategy(state.playersTurn, state)
            if (currentPositionEvaluation < pruneLevelMin) return listOf(Line(currentPositionEvaluation, emptyList()))
            if (currentPositionEvaluation > pruneLevelMax) return listOf(Line(currentPositionEvaluation, emptyList()))
        }

        return state.findAllMoves()
            .flatMap { ms ->
                treeSearch(level - 1, ms.state)
                    .map {
                        it.prepend(ms.move).copy(evaluation = -it.evaluation)
                    }
                    // for each move, find the best opponent responses
                    .sortedBy(Line::evaluation)
                    .take(1) // what happens with 2 or more?
            }
            .sortedByDescending(Line::evaluation)
            .take(OPTIONS)
            .toList()
    }
}
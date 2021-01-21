@file:Suppress("NOTHING_TO_INLINE")

package de.earley.gogogo.ai

import de.earley.gogogo.game.*

fun Evaluation.bestMove(player: Player, state: State): MoveToState {
	return state.findAllMoves().maxByOrNull {
		this(player, it.state)
	} ?: error("No valid moves for player $player with state=${state.debugString()}")
}

class AI(
	private val strategy: Evaluation,
	strategyName: String = ""
) : PlayerController {
	override val name: String = "AI - $strategyName"
	override suspend fun getMove(lastMove: Move?, state: State, fromSelectCallback: (Point?) -> Unit): Pair<Move, List<Line>?> {
		// TODO lines
		return strategy.bestMove(state.playersTurn, state).move to null
	}
}
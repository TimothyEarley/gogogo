@file:Suppress("NOTHING_TO_INLINE")

package de.earley.gogogo.ai

import de.earley.gogogo.game.*

/**
 * the higher the [Int] better this [State] is for the [Player]
 */
typealias Strategy = (Player, State) -> Int

fun Strategy.map(f: (Player, State, Int) -> Int): Strategy = { player, state ->
	f(player, state, this(player, state))
}

data class MoveToState(val move: Move, val state: State)

fun Strategy.bestMove(player: Player, state: State): MoveToState =
	state.findAllMoves().maxByOrNull {
        this(player, it.state)
    } ?: error("No valid moves for player $player with state=${state.debugString()}")

fun Strategy.debugBestMove(player: Player, state: State): MoveToState {
	val best = state.findAllMoves().map {
        this(player, it.state) to it
    }.maxByOrNull { it.first } ?: error("No valid moves for player $player with state=${state.debugString()}")

	println("Player $player thinks the move is worth: ${best.first} points.")

	return best.second
}


class AI(
	private val strategy: Strategy,
	private val debug: Boolean = true,
	strategyName: String = ""
) : PlayerController {

	override val name: String = "AI - $strategyName"

	override suspend fun getMove(lastMove: Move?, state: State, fromSelectCallback: (Point?) -> Unit): Pair<Move, List<Line>?> {

		val (move, _)  =
			if (debug) strategy.debugBestMove(state.playersTurn, state)
			else strategy.bestMove(state.playersTurn, state)

		return move to null // TODO lines
	}
}
@file:Suppress("NOTHING_TO_INLINE")

package de.earley.gogogo.ai

import de.earley.gogogo.game.*

typealias Strat = (Player, State) -> Float

data class MoveToState(val move: Move, val state: State)

fun Strat.bestMove(player: Player, state: State): MoveToState =
	state.findAllMoves().maxBy {
		this(player, it.state)
	} ?: error("No valid moves for player $player with state=${state.debugString()}")

fun Strat.debugBestMove(player: Player, state: State): MoveToState {
	val best = state.findAllMoves().map {
		this(player, it.state) to it
	}.maxBy { it.first } ?: error("No valid moves for player $player with state=${state.debugString()}")

	println("Player $player thinks the move is worth: ${best.first} points. (easy: ${easy(player, best.second.state)}, easyNL: ${easyNL(player, best.second.state)})")

	return best.second
}


class AI(private val strat: Strat, private val debug: Boolean = true) : PlayerController {
	override val name: String = "AI"

	override suspend fun getMove(lastMove: Move?, state: State, fromSelectCallback: (Point?) -> Unit): Move {

		val (move, _)  =
			if (debug) strat.debugBestMove(state.playersTurn, state)
			else strat.bestMove(state.playersTurn, state)

		return move
	}

}

fun State.findAllMoves(): Sequence<MoveToState> = sequence {
	fun tryMove(from: Point, to: Point): MoveToState? {
		val next = move(from, to)
		return if (next is MoveResult.Success)
			MoveToState(Move(from, to), next.state)
		else
			null
	}

	grid.getAllFor(playersTurn)
		.filter { isEligibleToMove(it) }
		.forEach { from ->
			tryMove(from, from.left())?.let { yield(it) }
			tryMove(from, from.right())?.let { yield(it) }
			tryMove(from, from.up())?.let { yield(it) }
			tryMove(from, from.down())?.let { yield(it) }
		}
}

private inline fun Point.left(): Point = Point(x - 1, y)
private inline fun Point.right(): Point = Point(x + 1, y)
private inline fun Point.up(): Point = Point(x, y - 1)
private inline fun Point.down(): Point = Point(x, y + 1)

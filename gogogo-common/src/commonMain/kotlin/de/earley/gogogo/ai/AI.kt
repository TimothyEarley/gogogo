package de.earley.gogogo.ai

import de.earley.gogogo.game.*
import de.earley.gogogo.game.grid.forEach
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

typealias Strat = (Player, State) -> Float

fun Strat.bestMove(player: Player, state: State): Triple<Point, Point, State> =
	state.findAllMoves().maxBy { this(player, it.third) }!!

fun Strat.debugBestMove(player: Player, state: State): Triple<Point, Point, State> {
	val best = state.findAllMoves().map {
		this(player, it.third) to it
	}.maxBy { it.first }!!
	println("Player $player thinks the move is worth: ${best.first} points")
	return best.second
}


class AI(private val strat: Strat) : PlayerController {
	override val name: String = "AI"

	override suspend fun getMove(lastMove: Move?, state: State, fromSelectCallback: (Point?) -> Unit): Move {

		return strat.debugBestMove(state.playersTurn, state).let { (from, to, _) ->
			Move(from, to)
		}
	}

}

fun State.findAllMoves(): List<Triple<Point, Point, State>> = sequence {
	grid.forEach { fx, fy, _ ->
		val from = Point(fx, fy)
		if (isEligibleToMove(from)) {
			grid.forEach { tx, ty, _ ->
				val to = Point(tx, ty)
				val next = move(from, to)
				if (next is MoveResult.Success) {
					yield(Triple(from, to, next.state))
				}
			}
		}
	}
}.toList()
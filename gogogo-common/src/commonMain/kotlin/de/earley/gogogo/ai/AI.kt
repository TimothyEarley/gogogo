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


class AI : PlayerController {
	override val name: String = "AI"

	private val strat: Strat = stratPerPlayer(hard, hard)

	override suspend fun getMove(state: State, fromSelectCallback: (Point?) -> Unit): Move {

		return strat.debugBestMove(state.playersTurn, state).let { (from, to, _) ->
			Move(from, to)
		}
	}

}

fun stratPerPlayer(blue: Strat, red: Strat): Strat = { p, s ->
	when (p) {
		Player.Red -> red(p, s)
		Player.Blue -> blue(p, s)
	}
}

fun State.findAllMoves(): List<Triple<Point, Point, State>> = sequence {
	grid.forEach { fx, fy, _ ->
		val from = Point(fx, fy)
		if (isEligibleToMove(from)) {
			grid.forEach { tx, ty, _ ->
				val to = Point(tx, ty)
				val next = move(from, to)
				if (next != null) {
					yield(Triple(from, to, next))
				}
			}
		}
	}
}.toList()
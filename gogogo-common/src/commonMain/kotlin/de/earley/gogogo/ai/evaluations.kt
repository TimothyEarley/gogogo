package de.earley.gogogo.ai

import de.earley.gogogo.game.Player
import de.earley.gogogo.game.Point
import de.earley.gogogo.game.State
import de.earley.gogogo.game.next

/**
 * the higher the [Int] better this [State] is for the [Player]
 */
typealias Evaluation = (Player, State) -> Int

object Evaluations {

	//TODO check evaluation bias (tends to be negative) -> correct towards 0

	// closer to end -> good
	private const val progressMult = 3
	// having more tokens -> better
	private const val tokenBonus = 3

	val sumPosition: Evaluation = { ownPlayer, state ->
		fun pointForPosition(p: Point, player: Player): Int {
			// TODO how to factor in pushed?
			val progress = progressMult * (progress(p, state.grid.width, player) + 1)
			return progress + tokenBonus
		}

		positionalSum(ownPlayer, state, ::pointForPosition)
	}


	val sumSquarePosition: Evaluation = { ownPlayer, state ->
		positionalSum(ownPlayer, state) { p, player ->
			progress(p, state.grid.width, player).let { it * it }
		}
	}

	val mostForward: Evaluation = { ownPlayer, state ->
		positionalMax(ownPlayer, state) { point, player ->
			progress(
				point,
				state.grid.width,
				player
			)
		}
	}

	// HELPERS

	private fun progress(p: Point, width: Int, player: Player): Int = when (player) {
		Player.Red -> width - p.x - 1
		Player.Blue -> p.x
	}

	private inline fun positionalMax(
		ownPlayer: Player,
		state: State,
		pointsForPosition: (Point, Player) -> Int
	) = positionalPointSystem(ownPlayer, state) {
		mapMax { pointsForPosition(it, ownPlayer) }
	}

	//TODO normalise around 0
	private inline fun positionalSum(
		ownPlayer: Player,
		state: State,
		pointsForPosition: (Point, Player) -> Int
	) = positionalPointSystem(ownPlayer, state) { player ->
		sumBy { pointsForPosition(it, player) }
	}

	private inline fun positionalPointSystem(
		ownPlayer: Player,
		state: State,
		positionalPoints: List<Point>.(Player) -> Int
	): Int =
		if (state.victor == ownPlayer) Int.MAX_VALUE
		else {
			val opponent = ownPlayer.next()

			val ownPoints = state.grid.getAllFor(ownPlayer).positionalPoints(ownPlayer)
			val opponentPoint = state.grid.getAllFor(opponent).positionalPoints(opponent)

			ownPoints - opponentPoint
		}


	private inline fun <T> List<T>.mapMax(f: (T) -> Int): Int {
		var max: Int = Int.MIN_VALUE
		for (elem in this) {
			val value = f(elem)
			if (value > max) max = value
		}
		return max
	}

}
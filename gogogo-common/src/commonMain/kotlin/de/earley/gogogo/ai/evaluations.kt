package de.earley.gogogo.ai

import de.earley.gogogo.game.*
import de.earley.gogogo.game.grid.Point

data class Evaluation(val name : String, val eval : (Player, State) -> Int)

object Evaluations {

	//TODO check evaluation bias (tends to be negative) -> correct towards 0

	val none: Evaluation = Evaluation("none") { _, _ -> 0 }

	// closer to end -> good
	private const val progressMult = 1
	// immobile -> bad
	private const val pushedPenalty = 1
	// having more tokens -> better
	private const val tokenBonus = 2

	val countTokens = Evaluation("countTokens") { ownPlayer, state ->
		state.tokensFor(ownPlayer).size - state.tokensFor(ownPlayer.next()).size
	}

	val sumPosition = Evaluation("sumPosition") { ownPlayer, state ->
		fun pointForPosition(p: Point, player: Player): Int {
			val progress = progressMult * progress(p, GAME_WIDTH, player)
			val pushed = if (state.lastPushed == p) pushedPenalty else 0
			return progress + tokenBonus - pushed
		}

		positionalSum(ownPlayer, state, ::pointForPosition)
	}


	val sumSquarePosition = Evaluation("sumSquarePos") { ownPlayer, state ->
		positionalSum(ownPlayer, state) { p, player ->
			progress(p, GAME_WIDTH, player).let { it * it }
		}
	}

	val mostForward = Evaluation("mostForward") { ownPlayer, state ->
		positionalMax(ownPlayer, state) { point, player ->
			progress(
				point,
				GAME_WIDTH,
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

	private inline fun positionalSum(
		ownPlayer: Player,
		state: State,
		pointsForPosition: (Point, Player) -> Int
	) = positionalPointSystem(ownPlayer, state) {
		sumBy { pointsForPosition(it, ownPlayer) }
	}

	private inline fun positionalPointSystem(
		ownPlayer: Player,
		state: State,
		positionalPoints: List<Point>.(Player) -> Int
	): Int {
		val opponent = ownPlayer.next()

		val ownPoints = state.tokensFor(ownPlayer).positionalPoints(ownPlayer)
		val opponentPoint = state.tokensFor(opponent).positionalPoints(opponent)

		return ownPoints - opponentPoint
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
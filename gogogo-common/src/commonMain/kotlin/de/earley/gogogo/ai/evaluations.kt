package de.earley.gogogo.ai

import de.earley.gogogo.game.*
import de.earley.gogogo.game.grid.Point

data class Evaluation(val name : String, val eval : (Player, State) -> Int)

class EvaluationAI(private val evaluation: Evaluation): AI("Eval - ${evaluation.name}") {
	override suspend fun calculateMove(state: State): MoveResponse = with(state) {
		val moves = possibleMoves.map { it to withMove(it) { -evaluation.eval(playersTurn, state) } }
		val bestMove = moves.maxByOrNull { it.second }?.first!!
		return MoveResponse(bestMove, moves.map { Line.fromMove(it.first, it.second) })
	}
}

object Evaluations {

	//TODO check evaluation bias (tends to be negative) -> correct towards 0

	val none: Evaluation = Evaluation("none") { _, _ -> 0 }

	// TODO check performance (was removed in Grid for performance)
	private fun State.tokensFor(ownPlayer: Player): List<Point> = buildList {
		grid.onEach { point, player ->
			if (player == ownPlayer) add(point)
		}
	}

	val countTokens = Evaluation("countTokens") { ownPlayer, state ->
		state.tokensFor(ownPlayer).size - state.tokensFor(ownPlayer.next()).size
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

	private val pMap = intArrayOf(
		1, 2, 3, 4, 10, 100,
		1, 2, 4, 5, 10, 100,
		1, 2, 4, 5, 10, 100,
		1, 2, 4, 5, 10, 100,
		1, 2, 3, 4, 10, 100,
	)
	val positionMap = Evaluation("positionMap") { ownPlayer, state ->
		positionalSum(ownPlayer, state) { point, player ->
			when (player) {
				Player.Red -> pMap[(GAME_WIDTH - 1 - point.x) + point.y * GAME_WIDTH]
				Player.Blue -> pMap[point.x + point.y * GAME_WIDTH]

			}
		}
	}

	// HELPERS

    fun combine(a: Evaluation, weightA : Int, b: Evaluation, weightB: Int) = Evaluation("$weightA x ${a.name} + $weightB x ${b.name}") { ownPlayer, state ->
		a.eval(ownPlayer, state) * weightA + b.eval(ownPlayer, state) * weightB
	}

	private fun progress(p: Point, width: Int, player: Player): Int = when (player) {
		Player.Red -> width - p.x - 1
		Player.Blue -> p.x
	}

	private inline fun positionalMax(
		ownPlayer: Player,
		state: State,
		pointsForPosition: (Point, Player) -> Int
	) = positionalPointSystem(ownPlayer, state) { player ->
		mapMax { pointsForPosition(it, player) }
	}

	private inline fun positionalSum(
		ownPlayer: Player,
		state: State,
		pointsForPosition: (Point, Player) -> Int
	) = positionalPointSystem(ownPlayer, state) { player ->
		sumOf { pointsForPosition(it, player) }
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
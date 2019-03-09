package de.earley.gogogo.ai

import de.earley.gogogo.game.Player
import de.earley.gogogo.game.Point
import de.earley.gogogo.game.State
import de.earley.gogogo.game.next
import kotlin.random.Random

// closer to end -> good
const val progressMult = 1
// immobile -> bad
const val pushedPenalty = 1
// having more tokens -> better
const val tokenBonus = 2

val easy: Strat = { ownPlayer, state ->

	fun pointForPosition(p: Point, player: Player): Int {
		val progress = progressMult * progress(p, state.grid.width, player)

		val pushed = if (state.lastPushed == p) pushedPenalty else 0

		return progress + tokenBonus - pushed
	}

	//TODO make random dependent on difficulty? Scale down random? No random?
	//Random.nextFloat() +
	positionalSum(ownPlayer, state, ::pointForPosition).toFloat()
}

val easyNL: Strat = { ownPlayer, state ->
	positionalSum(ownPlayer, state) { p, player ->
		progress(p, state.grid.width, player).let { it * it }
	}.toFloat()
}

val mostForward: Strat = { player, state ->
	positionalMax(player, state) { point, player -> progress(point, state.grid.width, player) }.toFloat()
}

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
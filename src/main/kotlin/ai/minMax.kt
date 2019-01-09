package de.earley.gogogo.ai

import de.earley.gogogo.game.Player
import de.earley.gogogo.game.State
import kotlin.math.max
import kotlin.math.min

fun minMax(player: Player, state: State): Float = state.minMaxPrune(player, 3)


private fun State.minMax(player: Player, depth: Int, max: Boolean = true): Float {

	if (depth <= 0) return medium(player, this)

	if (victor != null) return when (victor) {
		player -> Float.POSITIVE_INFINITY
		else -> Float.NEGATIVE_INFINITY
	}

	// min max
	val children = findAllMoves().map { it.third }
	val values = children.map {
		it.minMax(player, depth - 1, !max)
	}

	return if (max) values.max()!! else values.min()!!
}

const val pruneDiff = 100

private fun State.minMaxPrune(player: Player, depth: Int, max: Boolean = true): Float {

	if (depth <= 0) return medium(player, this)

	if (victor != null) return when (victor) {
		player -> Float.POSITIVE_INFINITY
		else -> Float.NEGATIVE_INFINITY
	}

	// min max
	val children = findAllMoves().map { it.third }

	var minVal = Float.POSITIVE_INFINITY
	var maxVal = Float.NEGATIVE_INFINITY

	children.forEach {
		val value = it.minMaxPrune(player, depth - 1, !max)

		if (max && value > pruneDiff) {
			println("Pruned")
			return value
		}
		if (!max && value < -pruneDiff) {
			println("Pruned")
			return value
		}

		minVal = min(minVal, value)
		maxVal = max(maxVal, value)
	}

	return if (max) maxVal else minVal
}

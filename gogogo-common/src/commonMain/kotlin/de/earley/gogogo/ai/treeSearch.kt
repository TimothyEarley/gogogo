package de.earley.gogogo.ai

import de.earley.gogogo.game.Player
import de.earley.gogogo.game.State
import de.earley.gogogo.game.next

//TODO better overloading
fun treeSearchStrategy(
	level: Int,
	baseStrategy: Strategy,
	pruning: Boolean,
	pruneLevelMax: Int = 0,
	pruneLevelMin: Int = -pruneLevelMax
): Strategy = { player, state ->
	treeSearch(player, state, level, baseStrategy, pruning, pruneLevelMax, pruneLevelMin)
}

/**
 * Pruning is done on the [baseStrategy]
 */
private fun treeSearch(
	player: Player,
	state: State,
	level: Int,
	baseStrategy: Strategy,
	pruning: Boolean,
	pruneLevelMax: Int,
	pruneLevelMin: Int
): Int {

	if (level == 0) return baseStrategy(player, state)

	if (state.victor != null) {
		return if (player == state.victor) Int.MAX_VALUE else Int.MIN_VALUE
	}

	if (pruning) {
		val currentPositionEvaluation = baseStrategy(player, state)
		if (currentPositionEvaluation < pruneLevelMin) return currentPositionEvaluation
		if (currentPositionEvaluation > pruneLevelMax) return currentPositionEvaluation
	}

	val moves = state.possibleMoves.asSequence().map {
		treeSearch(player, it.state, level- 1, baseStrategy, pruning, pruneLevelMax, pruneLevelMin)
	}

	//TODO we have four cases. Can we combine some?
	return if (player == state.playersTurn) {
		// if it is my turn, find the best move I can do
		if (pruning) {
			// if we reach a good enough move, use that
			moves.maxPruning(pruneLevelMax)
		} else {
			moves.maxOrNull()!!
		}
	} else {
		// it is the opponents turn, what is the worst they can do?
		if (pruning) {
			moves.minPruning(pruneLevelMin)
		} else {
			moves.minOrNull()!!
		}
	}
}

private fun Sequence<Int>.maxPruning(pruneLevel: Int): Int {
	var bestValue = Int.MIN_VALUE
	this.forEach {
		if (it > pruneLevel) {
			return it
		}
		else if (it > bestValue) {
			bestValue = it
		}
	}
	return bestValue
}

private fun Sequence<Int>.minPruning(pruneLevel: Int): Int {
	// go through sequence adding to list until we reach the end or more than pruning
	var worstValue = Int.MAX_VALUE
	this.forEach {
		if (it < pruneLevel) {
			return it
		} else if (it < worstValue) {
			worstValue = it
		}
	}
	return worstValue
}
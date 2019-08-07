package de.earley.gogogo.ai

import de.earley.gogogo.game.Player
import de.earley.gogogo.game.State
import de.earley.gogogo.game.next

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

	if (state.victor != null)
		return if (player == state.victor) Int.MAX_VALUE else Int.MIN_VALUE

	if (pruning) {
		val currentPositionEvaluation = baseStrategy(player, state)
		if (currentPositionEvaluation < pruneLevelMin) return currentPositionEvaluation
		if (currentPositionEvaluation > pruneLevelMax) return currentPositionEvaluation
	}

	val opponentMoveScores = state.findAllMoves().map {
		treeSearch(player.next(), it.state, level - 1, baseStrategy, pruning, pruneLevelMax, pruneLevelMin)
	}

	return  - if (pruning) {
		opponentMoveScores.maxWithPruning(pruneLevelMax) ?: 0
	} else {
		opponentMoveScores.max() ?: 0
	}
}

private fun Sequence<Int>.maxWithPruning(pruneLevel: Int): Int? {
	val iterator = iterator()
	if (!iterator.hasNext()) return null
	var max = iterator.next()
	while (iterator.hasNext()) {
		val e = iterator.next()
		if (max < e) max = e
		if (max > pruneLevel) return max
	}
	return max
}
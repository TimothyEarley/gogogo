package de.earley.gogogo.ai

import de.earley.gogogo.game.Player
import de.earley.gogogo.game.State
import de.earley.gogogo.game.next

// pretty bad at red
val hard: Strat = { player, state ->
	// 2 is okay time wise and quite fun / aggressive -> but also quite easy to beat
	// 3 is slow but decent (still very beatable)
	treeSearch(player, state, 2, false, 0, 0)
}

fun hardPruneLevel(level: Int, pruneLevel: Int): Strat {
	return { player, state ->
		treeSearch(player, state, level, true, -pruneLevel, pruneLevel)
	}
}

var evaluationSum: Double = 0.0
var evaluationCount: Int = 0

fun treeStrat(
	level: Int,
	pruning: Boolean,
	pruneLevel: Int,
	baseStrat: Strat
): Strat = { player, state -> treeSearch(player, state, level, pruning, -pruneLevel, pruneLevel, baseStrat) }

// absolute asshole AI that once achieving certain victory can delay the end to toy with you
fun treeSearch(
	player: Player,
	state: State,
	level: Int,
	pruning: Boolean,
	pruneLevelMin: Int,
	pruneLevelMax: Int,
	baseStrat: Strat = medium
): Float {

	//TODO hide behind conditional
	val currentPositionEvaluation = baseStrat(player, state)

	if (level == 0) return currentPositionEvaluation

	if (state.victor != null)
		return if (player == state.victor) Float.POSITIVE_INFINITY else Float.NEGATIVE_INFINITY


//	evaluationSum += currentPositionEvaluation
//	evaluationCount++
//	println("$currentPositionEvaluation , AVG: ${evaluationSum / evaluationCount}")

	// pruning
	//TODO prune with easy
	if (pruning) {
		if (currentPositionEvaluation < pruneLevelMin) return currentPositionEvaluation
		if (currentPositionEvaluation > pruneLevelMax) return currentPositionEvaluation
	}

	val opponentMoveScores = state.findAllMoves().map {
		treeSearch(player.next(), it.state, level - 1, pruning, pruneLevelMin, pruneLevelMax)
	}

	//TODO add currentPositionEvaluation for better short term?
	return  - if (pruning) {
		opponentMoveScores.maxWithPruning(pruneLevelMax) ?: 0f
	} else {
		opponentMoveScores.max() ?: 0f
	}
}

fun Sequence<Float>.maxWithPruning(pruneLevel: Int): Float? {
	val iterator = iterator()
	if (!iterator.hasNext()) return null
	var max = iterator.next()
	if (max.isNaN()) return max
	while (iterator.hasNext()) {
		val e = iterator.next()
		if (e.isNaN()) return e
		if (e > pruneLevel) return e
		if (max < e) max = e
	}
	return max
}
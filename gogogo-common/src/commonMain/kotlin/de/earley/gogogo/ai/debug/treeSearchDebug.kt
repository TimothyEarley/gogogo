package de.earley.gogogo.ai.debug

import de.earley.gogogo.ai.findAllMoves
import de.earley.gogogo.game.Player
import de.earley.gogogo.game.State
import de.earley.gogogo.game.next

fun treeSearchStrategyDebug(
	level: Int,
	baseStrategy: DebugStrategy,
	pruning: Boolean,
	pruneLevelMax: Int = 0,
	pruneLevelMin: Int = -pruneLevelMax
): DebugStrategy = { player, state, label ->
	treeSearchDebug(player, state, level, baseStrategy, pruning, pruneLevelMax, pruneLevelMin, label)
}

/**
 * Pruning is done on the [baseStrategy]
 */
private fun treeSearchDebug(
	player: Player,
	state: State,
	level: Int,
	baseStrategy: DebugStrategy,
	pruning: Boolean,
	pruneLevelMax: Int,
	pruneLevelMin: Int,
	label: String
): DebugInfo {

	val playerWhoMoved = state.playersTurn.next()

	if (level == 0) return baseStrategy(player, state, label)

	if (state.victor != null) {
		val value = if (player == state.victor) Int.MAX_VALUE else Int.MIN_VALUE
		return DebugInfo(MoveEvaluation(label, value, playerWhoMoved))
	}

	if (pruning) {
		val currentPositionEvaluation = baseStrategy(player, state, label)
		val v = currentPositionEvaluation.v.evaluation
		if (v < pruneLevelMin) return currentPositionEvaluation
		if (v > pruneLevelMax) return currentPositionEvaluation
	}

	val moves = state.findAllMoves().map {
		treeSearchDebug(player, it.state, level- 1, baseStrategy, pruning, pruneLevelMax, pruneLevelMin, it.move.toString())
	}

	//TODO we have four cases. Can we combine some?
	return if (player == state.playersTurn) {
		// if it is my turn, find the best move I can do
		if (pruning) {
			// if we reach a good enough move, use that
			val (best, list) = moves.maxPruning(pruneLevelMax, DebugInfo::extractEvaluation)
			DebugInfo(MoveEvaluation(label, best, playerWhoMoved), list)
		} else {
			val list = moves.toList()
			val best = list.map { it.v.evaluation }.maxOrNull()!!
			DebugInfo(MoveEvaluation(label, best, playerWhoMoved), list)
		}
	} else {
		if (pruning) {
			val (worst, list) = moves.minPruning(pruneLevelMin, DebugInfo::extractEvaluation)
			DebugInfo(MoveEvaluation(label, worst, playerWhoMoved), list)
		} else {
			val list = moves.toList()
			// it is the opponents turn, what is the worst they can do?
			val worst = list.map { it.v.evaluation }.minOrNull()!!
			DebugInfo(MoveEvaluation(label, worst, playerWhoMoved), list)
		}
	}
}

private fun <T> Sequence<T>.maxPruning(pruneLevel: Int, f: (T) -> Int): Pair<Int, List<T>> {
	// go through sequence adding to list until we reach the end or more than pruning
	val result = mutableListOf<T>()
	var bestValue = Int.MIN_VALUE
	this.forEach {
		result.add(it)
		val value = f(it)
		if (value > pruneLevel) {
			return value to result
		}
		else if (value > bestValue) {
			bestValue = value
		}
	}
	return bestValue to result
}

private fun <T> Sequence<T>.minPruning(pruneLevel: Int, f: (T) -> Int): Pair<Int, List<T>> {
	// go through sequence adding to list until we reach the end or more than pruning
	val result = mutableListOf<T>()
	var worstValue = Int.MAX_VALUE
	this.forEach {
		result.add(it)
		val value = f(it)
		if (value < pruneLevel) {
			return value to result
		} else if (value < worstValue) {
			worstValue = value
		}
	}
	return worstValue to result
}
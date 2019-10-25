package de.earley.gogogo.ai.debug

import de.earley.gogogo.ai.*
import de.earley.gogogo.game.Move
import de.earley.gogogo.game.Player
import de.earley.gogogo.game.State

data class MoveEvaluation(val label: String, val evaluation: Int, val byPlayer: Player)
typealias DebugInfo = Tree<MoveEvaluation>
fun DebugInfo.extractEvaluation() = v.evaluation
typealias DebugStrategy = (Player, State, String) -> DebugInfo

fun DebugStrategy.toRealStrategy(): Strategy = { player, state -> this(player, state, "root").extractEvaluation() }

data class Tree<T>(val v: T, val children: List<Tree<T>> = emptyList())
fun <T> Tree<T>.walk(): Sequence<T> = sequence {
	yield(v)
	children.forEach {
		yieldAll(it.walk())
	}
}

fun Evaluation.withDebug(): DebugStrategy = { player, state, label ->
	DebugInfo(MoveEvaluation(label, this(player, state), state.playersTurn))
}


val easyDebug = Evaluations.sumSquarePosition.withDebug()
val level1 = treeSearchStrategyDebug(1, easyDebug, false)
val level2 = treeSearchStrategyDebug(2, easyDebug, false)
val level3 = treeSearchStrategyDebug(3, easyDebug, false)
val level4 = treeSearchStrategyDebug(4, easyDebug, false)
// from here its too slow, so add pruning
val superDebug = treeSearchStrategyDebug(7, level3, true, pruneLevelMax = 40)
val superDebugR = treeSearchStrategyDebug(6, level3, true, pruneLevelMax = 40)
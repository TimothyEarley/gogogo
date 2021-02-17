package de.earley.gogogo.game

import de.earley.gogogo.game.grid.Point
import kotlin.jvm.JvmName

const val GAME_WIDTH = 6
const val GAME_HEIGHT = 5

open class Game(
	protected var state : State = State.initial()
) {

	private val moves: MutableList<Move> = mutableListOf()

	val player: Player get() = state.playersTurn
	val victor: Player? get() = state.victor

	fun canUndo(): Boolean = moves.size > 1

	open fun undo() {
		if (!canUndo()) return
		state.undoMove(moves.last())
		moves.drop(1)
	}

	fun tokenAt(p : Point) = state.tokenAt(p)
	fun isEligibleToMove(from: Point): Boolean = state.isEligibleToMove(from)
	fun isOver(): Boolean = victor != null
	fun move(move: Move): MoveResult {
		val result = state.move(move)
		if (result is MoveResult.Success) {
			moves.add(move)
		}
		return result
	}

	//  DO NOT USE OUTSIDE OF TESTS
	@JvmName("_")
	fun getState() : State = state
}
package de.earley.gogogo.game

import de.earley.gogogo.game.grid.Point
import kotlin.jvm.JvmName

const val GAME_WIDTH = 6
const val GAME_HEIGHT = 5

// is now very similar to State since State is now also mutable
open class Game(
	protected var state : State = State.initial()
) {

	val player: Player get() = state.playersTurn
	val victor: Player? get() = state.victor

	fun canUndo(): Boolean = state.canUndo()

	open fun undo() {
		if (!canUndo()) return
		state.undo()
	}

	fun tokenAt(p : Point) = state.tokenAt(p)
	fun isEligibleToMove(from: Point): Boolean = state.isEligibleToMove(from)
	fun isOver(): Boolean = victor != null
	fun move(move: Move): MoveResult = state.move(move)

	//  DO NOT USE OUTSIDE OF TESTS
	@JvmName("_")
	fun getState() : State = state
}
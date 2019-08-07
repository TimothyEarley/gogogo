package de.earley.gogogo.ai

import de.earley.gogogo.game.Move
import de.earley.gogogo.game.MoveResult
import de.earley.gogogo.game.Point
import de.earley.gogogo.game.State

fun State.findAllMoves(): Sequence<MoveToState> = sequence {
	fun tryMove(from: Point, to: Point): MoveToState? {
		val next = move(from, to)
		return if (next is MoveResult.Success)
			MoveToState(Move(from, to), next.state)
		else
			null
	}

	grid.getAllFor(playersTurn)
		.filter { isEligibleToMove(it) }
		.forEach { from ->
			tryMove(from, from.left())?.let { yield(it) }
			tryMove(from, from.right())?.let { yield(it) }
			tryMove(from, from.up())?.let { yield(it) }
			tryMove(from, from.down())?.let { yield(it) }
		}
}

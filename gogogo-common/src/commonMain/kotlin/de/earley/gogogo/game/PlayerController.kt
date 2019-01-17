package de.earley.gogogo.game

import kotlinx.serialization.Serializable

@Serializable
data class Move(val from: Point, val to: Point)

interface PlayerController {
	val name: String // for debug

	/**
	 * Return the move this controller chooses for the given state
	 * The callback can be used to show which points are selected (null being unselect)
	 */
	suspend fun getMove(state: State, fromSelectCallback: (Point?) -> Unit): Move
}
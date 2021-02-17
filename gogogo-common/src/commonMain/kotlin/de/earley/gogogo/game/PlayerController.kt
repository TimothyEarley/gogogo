package de.earley.gogogo.game

import de.earley.gogogo.game.grid.Point

interface PlayerController {
	val name: String // for debug

	/**
	 * Return the move this controller chooses for the given state
	 * The callback can be used to show which points are selected (null being unselect)
	 */
	suspend fun getMove(lastMove: Move?, state: State, fromSelectCallback: (Point?) -> Unit): Move
}
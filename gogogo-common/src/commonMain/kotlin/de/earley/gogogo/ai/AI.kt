@file:Suppress("NOTHING_TO_INLINE")

package de.earley.gogogo.ai

import de.earley.gogogo.game.*
import de.earley.gogogo.game.grid.Point

abstract class AI(
	aiName: String = ""
) : PlayerController {

	override val name: String = "AI - $aiName"

	override suspend fun getMove(lastMove: Move?, state: State, fromSelectCallback: (Point?) -> Unit): MoveResponse {
        return calculateMove(state)
	}

	abstract fun calculateMove(state: State): MoveResponse
}
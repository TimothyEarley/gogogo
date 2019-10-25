package de.earley.gogogo.ai

import de.earley.gogogo.game.*
import de.earley.gogogo.net.MoveNetFormat
import de.earley.gogogo.net.StateNetFormat

//TODO deduplicate

private val database: Map<State, Move> by lazy {
	save.lines().windowed(2, 2).map { (state, move) ->
		StateNetFormat.decode(state) to MoveNetFormat.decode(move)
	}.toMap()
}

class HumanPlusAI(private val fallback: Strategy): PlayerController {
	override val name: String = "Human+"

	override suspend fun getMove(
		lastMove: Move?,
		state: State,
		fromSelectCallback: (Point?) -> Unit
	): Move = database.asSequence().find { (savedState, move) ->
		state == savedState || ( state.isSimilar(savedState) && state.canMove(move) )
	}?.let { it.value } ?: fallback.bestMove(state.playersTurn, state).move.also {
		println("Had to check with AI")
	}

	//TODO add detection for flipped states and extract the move that way
}
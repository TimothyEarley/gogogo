package de.earley.gogogo.benchmark

import de.earley.gogogo.ai.Strategy
import de.earley.gogogo.game.State

fun wackyCarlo(
	level: Int,
	base: Strategy,
	lookAt: Int
): Strategy = { player, state ->
	fun recurse(state: State, level: Int): Int {
		if (level == 0) return base(player, state)

		val next = state.possibleMoves
			.shuffled()
			.take(lookAt)
			.map { recurse(it.state, level - 1) }

		return if (player == state.playersTurn) {
			// get best move
			next.maxOrNull() ?: 0
		} else {
			// get worst move
			next.minOrNull() ?: 0
		}
	}

	recurse(state, level)
}
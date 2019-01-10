package de.earley.gogogo.ai

import de.earley.gogogo.game.Player
import de.earley.gogogo.game.State

data class MemState(
	val player: Player,
	val state: State
)

fun memoize(strat: Strat): Strat {
	val mem: MutableMap<MemState, Float> = HashMap()

	return { player, state ->
		val memState = MemState(player, state)
		mem.getOrPut(memState) {
			strat(player, state)
		}
	}
}
package de.earley.gogogo.ai

import de.earley.gogogo.game.Player
import de.earley.gogogo.game.State
import de.earley.gogogo.game.next

// pretty bad at red
val hard: Strat = { player, state ->
	// 2 is okay time wise and quite fun / aggressive -> but also quite easy to beat
	// 3 is slow but decent (still very beatable)
	recMed(player, state, 2)
}

// absolute asshole AI that once achieving certain victory can delay the end to toy with you
fun recMed(player: Player, state: State, level: Int): Float {
	if (level == 0) return medium(player, state)

	if (state.victor != null)
		return if (player == state.victor) Float.POSITIVE_INFINITY else Float.NEGATIVE_INFINITY

	val bestOpponentMove = state.findAllMoves().map {
		recMed(player.next(), it.third, level - 1)
	}.max() ?: 0f

	return -bestOpponentMove
}
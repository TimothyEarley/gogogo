package de.earley.gogogo.ai

import de.earley.gogogo.game.Player
import de.earley.gogogo.game.Point
import de.earley.gogogo.game.grid.sumBy
import kotlin.random.Random

// closer to end -> good
const val progressMult = 10
// immobile -> bad
const val pushedPenalty = 6
// having more tokens -> better
const val tokenBonus = 10

val easy: Strat = memoize { ownPlayer, state ->

	if (state.victor == ownPlayer) Float.MAX_VALUE
	else Random.nextFloat() + state.grid.sumBy { x, y, player ->

		val progress = progressMult * when (player) {
			Player.Red -> state.grid.width - x - 1
			Player.Blue -> x
			else -> 0
		}

		val victoryBonus = if (progress == state.grid.width - 1) 1000 else 0

		val pushed = if (state.lastPushed == Point(x, y)) pushedPenalty else 0

		val total = progress + victoryBonus + tokenBonus - pushed

		when {
			player == ownPlayer -> +total
			player != null -> -total
			else -> 0
		}

	}
}

package de.earley.gogogo.ai

import de.earley.gogogo.game.next

val medium: Strat = { ownPlayer, state ->
	if (state.victor == ownPlayer)
		Float.MAX_VALUE
	else
	// choose the state which leaves the worst options for the opponent
	{
		val opponentMove = easy.bestMove(ownPlayer.next(), state)
		easy(ownPlayer, opponentMove.state)
	}
}

fun mediumOf(baseStrat: Strat): Strat = { ownPlayer, state ->
	if (state.victor == ownPlayer)
		Float.MAX_VALUE
	else
	// choose the state which leaves the worst options for the opponent
	{
		val opponentMove = baseStrat.bestMove(ownPlayer.next(), state)
		baseStrat(ownPlayer, opponentMove.state)
	}
}

val mediumNL: Strat = mediumOf(easyNL)
val mediumMF: Strat = mediumOf(mostForward)

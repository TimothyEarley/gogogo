package de.earley.gogogo.ai

import de.earley.gogogo.game.next

fun recurseOnce(baseStrategy: Evaluation): Evaluation = { ownPlayer, state ->
	if (state.victor == ownPlayer)
		Int.MAX_VALUE
	else
	// choose the state which leaves the worst options for the opponent
	{
		val opponentMove = baseStrategy.bestMove(ownPlayer.next(), state)
		baseStrategy(ownPlayer, opponentMove.state)
	}
}
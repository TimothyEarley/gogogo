package de.earley.gogogo.ai

//val spearEasy: Strat = { ownPlayer, state ->
//
//	if (state.victor == ownPlayer) Float.MAX_VALUE
//	else Random.nextFloat() + state.grid.sumBy { x, y, player ->
//
//		val progress = progressMult * when (player) {
//			Player.Red -> state.grid.width - x - 1
//			Player.Blue -> x
//			else -> 0
//		}
//
//		val maxHeight = state.grid.height - 1
//		val centeriness = maxHeight - abs(maxHeight/2 - y)
//
//		val victoryBonus = if (progress == state.grid.width - 1) 1000 else 0
//
//		val pushed = if (state.lastPushed == Point(x, y)) pushedPenalty else 0
//
//		val total = centeriness * 2 + progress + victoryBonus + tokenBonus - pushed
//
//		when {
//			player == ownPlayer -> +total
//			player != null -> -total
//			else -> 0
//		}
//
//	}
//}

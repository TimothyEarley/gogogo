package de.earley.gogogo.ai

import de.earley.gogogo.game.MoveResponse
import de.earley.gogogo.game.State
import kotlin.random.Random

class RandomAI(private val rand: Random = Random) : AI("random") {
    override fun calculateMove(state: State): MoveResponse {
        return MoveResponse(state.possibleMoves.random(rand), null)
    }
}
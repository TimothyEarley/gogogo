package de.earley.gogogo.ai

import de.earley.gogogo.game.MoveResponse
import de.earley.gogogo.game.State
import kotlin.random.Random

class RandomAI(private val rand: Random = Random) : AI("random") {
    override suspend fun calculateMove(state: State): MoveResponse = calculateMoveSync(state)
    fun calculateMoveSync(state: State): MoveResponse =

            MoveResponse(state.possibleMoves.random(rand), null)
}
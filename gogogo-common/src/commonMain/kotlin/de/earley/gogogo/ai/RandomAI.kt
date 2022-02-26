package de.earley.gogogo.ai

import de.earley.gogogo.game.MoveResponse
import de.earley.gogogo.game.State
import kotlin.random.Random

class RandomAI(private val rand: Random = Random) : AI("random") {
    override fun calculateMove(state: State): MoveResponse =
        MoveResponse(state.possibleMoves.random(rand), null)
}

class FirstAI: AI("first") {
    override fun calculateMove(state: State): MoveResponse = MoveResponse(state.possibleMoves.first(), null)
}

class LastAI: AI("last") {
    override fun calculateMove(state: State): MoveResponse = MoveResponse(state.possibleMoves.last(), null)
}
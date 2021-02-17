package de.earley.gogogo.ai

import de.earley.gogogo.game.Line
import de.earley.gogogo.game.Move
import de.earley.gogogo.game.State
import kotlin.random.Random

class RandomAI(private val rand: Random = Random) : AI("random") {
    override fun calculateMove(state: State): Pair<Move, List<Line>?> {
        return state.possibleMoves.random(rand) to null
    }
}
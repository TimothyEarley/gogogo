@file:Suppress("unused")

package de.earley.gogogo.controller

import de.earley.gogogo.ai.*
import de.earley.gogogo.game.PlayerController

// TODO lazy init the AI

private val controllerTypes: List<Pair<String, () -> PlayerController>> = listOf(
        "Human" to ::HumanController,
        "Random" to RandomAI()::withUIAwareness,
        "AI none" to Search(
                depth = 4,
                evaluation = Evaluations.none,
                pruning = true,
                debug = true,
        )::withUIAwareness,
        "FORWARD" to Search(depth = 6, evaluation = Evaluations.mostForward, pruning = true, debug = true)::withUIAwareness

) + (1..6).map {
    "AI ct $it" to Search(
            depth = it,
            evaluation = Evaluations.countTokens,
            pruning = true,
            debug = true,
    )::withUIAwareness
}

fun controllerAsString(): List<String> = controllerTypes.map { it.first }
fun String.toController(): PlayerController = controllerTypes.find { it.first == this }!!.second()

@file:Suppress("unused")

package de.earley.gogogo.controller

import de.earley.gogogo.ai.*
import de.earley.gogogo.game.PlayerController
import kotlin.time.Duration.Companion.seconds

private val controllerTypes: List<Pair<String, () -> PlayerController>> = listOf(
        "Human" to ::HumanController,
        "Eval - map" to EvaluationAI(Evaluations.positionMap)::withUIAwareness,
        "AI Lague 1s"  to Lague(debug = true, depth = 0, useIterativeDeepening = true, timeout = 1.seconds,  evaluation = Evaluations.positionMap)::withUIAwareness,
        "AI Lague 2s"  to Lague(debug = true, depth = 0, useIterativeDeepening = true, timeout = 2.seconds,  evaluation = Evaluations.positionMap)::withUIAwareness,
        "AI Lague 5s"  to Lague(debug = true, depth = 0, useIterativeDeepening = true, timeout = 5.seconds,  evaluation = Evaluations.positionMap)::withUIAwareness,
        "AI Lague 10s" to Lague(debug = true, depth = 0, useIterativeDeepening = true, timeout = 10.seconds, evaluation = Evaluations.positionMap)::withUIAwareness,
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

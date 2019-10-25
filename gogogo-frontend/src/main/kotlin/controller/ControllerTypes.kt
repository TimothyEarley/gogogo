@file:Suppress("unused")

package de.earley.gogogo.ui

import de.earley.gogogo.ai.*
import de.earley.gogogo.ai.Evaluations.mostForward
import de.earley.gogogo.ai.Evaluations.sumSquarePosition
import de.earley.gogogo.game.PlayerController

enum class ControllerTypes(
	val build: () -> PlayerController
) {
	Human(::HumanController),
	Easy(AI(treeSearchStrategy(1, mostForward, false))::withUIAwareness),
	Medium(AI(treeSearchStrategy(3, sumSquarePosition, false))::withUIAwareness),
	Hard(HumanPlusAI(treeSearchStrategy(4, sumSquarePosition, false))::withUIAwareness),
}

fun controllerTypesAsString(): List<String> = ControllerTypes.values().map(ControllerTypes::toString)
fun String.toControllerType(): ControllerTypes = ControllerTypes.valueOf(this)

package de.earley.gogogo.ui

import de.earley.gogogo.ai.*
import de.earley.gogogo.game.PlayerController

enum class ControllerTypes(
	val build: () -> PlayerController
) {
	Human(::HumanController),
	Easy(AI(easy, strategyName = "easy")::withUIAwareness),
	Medium(AI(medium, strategyName = "medium")::withUIAwareness),
	Hard(AI(hard, strategyName = "hard")::withUIAwareness),
	Super(AI(superStrategy, strategyName = "super")::withUIAwareness),
	Extreme(AI(extreme, strategyName = "extreme")::withUIAwareness)
}

fun controllerTypesAsString(): List<String> = ControllerTypes.values().map(ControllerTypes::toString)
fun String.toControllerType(): ControllerTypes = ControllerTypes.valueOf(this)

package de.earley.gogogo.ui

import de.earley.gogogo.ai.*
import de.earley.gogogo.game.PlayerController

enum class ControllerTypes(
	val build: () -> PlayerController
) {

	Human(::HumanController),
	Easy(AI(easy)::withUIAwareness),
	Medium(AI(medium)::withUIAwareness),
	Hard(AI(hard)::withUIAwareness)

}

fun controllerTypesAsString(): List<String> = ControllerTypes.values().map(ControllerTypes::toString)
fun String.toControllerType(): ControllerTypes = ControllerTypes.valueOf(this)

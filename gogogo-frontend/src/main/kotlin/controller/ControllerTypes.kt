@file:Suppress("unused")

package de.earley.gogogo.controller

import de.earley.gogogo.ai.RandomAI
import de.earley.gogogo.ai.withUIAwareness
import de.earley.gogogo.game.PlayerController

enum class ControllerTypes(
	val build: () -> PlayerController
) {
	Human(::HumanController),
	Random(RandomAI()::withUIAwareness)
}

fun controllerTypesAsString(): List<String> = ControllerTypes.values().map(ControllerTypes::toString)
fun String.toControllerType(): ControllerTypes = ControllerTypes.valueOf(this)

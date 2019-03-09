package de.earley.gogogo.ui

import de.earley.gogogo.ai.*
import de.earley.gogogo.game.PlayerController

enum class ControllerTypes(
	val build: () -> PlayerController
) {

	Human(::HumanController),
	Easy(AI(easy)::withUIAwareness),
	Medium(AI(medium)::withUIAwareness),
	Hard(AI(hard)::withUIAwareness),
	Level1Prune4(AI(hardPruneLevel(1, 4))::withUIAwareness),
	Level2Prune4(AI(hardPruneLevel(2, 4))::withUIAwareness),
	Level3Prune4(AI(hardPruneLevel(3, 4))::withUIAwareness),
	Level4Prune4(AI(hardPruneLevel(4, 4))::withUIAwareness),
	HardNL(AI(treeStrat(2, false, 0, mediumNL))::withUIAwareness),
	HardForward(AI(treeStrat(2, false, 0, mediumMF))::withUIAwareness)
}

fun controllerTypesAsString(): List<String> = ControllerTypes.values().map(ControllerTypes::toString)
fun String.toControllerType(): ControllerTypes = ControllerTypes.valueOf(this)

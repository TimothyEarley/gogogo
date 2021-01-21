@file:Suppress("unused")

package de.earley.gogogo.ui

import de.earley.gogogo.ai.*
import de.earley.gogogo.ai.Evaluations.mostForward
import de.earley.gogogo.ai.Evaluations.sumPosition
import de.earley.gogogo.ai.Evaluations.sumSquarePosition
import de.earley.gogogo.game.PlayerController
import kotlin.time.ExperimentalTime
import kotlin.time.seconds

enum class ControllerTypes(
	val build: () -> PlayerController
) {
	Human(::HumanController),
	Easy(AI(treeSearchStrategy(1, mostForward, false))::withUIAwareness),
	Medium(AI(treeSearchStrategy(3, sumSquarePosition, false))::withUIAwareness),
	Hard(HumanPlusAI(treeSearchStrategy(4, sumSquarePosition, false))::withUIAwareness),
	NEWTREE(TreeSearch(4, sumSquarePosition, false)::withUIAwareness),
	NEWTREE_SUM(TreeSearch(4, sumPosition, false)::withUIAwareness),

	@OptIn(ExperimentalTime::class)
	MONTE_CARLO(MonteCarlo(sumPosition, 5.seconds, 100, true, true)::withUIAwareness),

	// blocks the UI, not yet ready!
	// MC(MonteCarlo(random(), 3000, Int.MAX_VALUE, true, true)::withUIAwareness)

}

fun controllerTypesAsString(): List<String> = ControllerTypes.values().map(ControllerTypes::toString)
fun String.toControllerType(): ControllerTypes = ControllerTypes.valueOf(this)

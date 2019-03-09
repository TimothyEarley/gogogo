package de.earley.gogogo.benchmark

import de.earley.gogogo.ai.Strat
import de.earley.gogogo.game.Player
import de.earley.gogogo.game.State
import kotlin.system.measureTimeMillis

class NamedBenchmarkStrat(val name: String, private val strat: Strat): Strat {

	private var totalTime: Long = 0
	private var invokeCount: Int = 0
	private var max: Long = 0

	override fun invoke(player: Player, state: State): Float {
		var value: Float? = null
		val time = measureTimeMillis {
			value = strat(player, state)
		}
		if (time > max) max = time
		totalTime += time
		invokeCount++
		return value!!
	}

	fun avg() = totalTime / invokeCount.toDouble()
	fun stats(): String = "[$name]: \tavg: ${avg().format(2)}ms, \tmax: ${max}ms, \tCount: $invokeCount"

}

private fun Double.format(digits: Int) = java.lang.String.format("%.${digits}f", this)

package de.earley.gogogo.benchmark

import de.earley.gogogo.ai.AI
import de.earley.gogogo.ai.Strategy
import de.earley.gogogo.game.*
import kotlin.system.measureTimeMillis

//TODO rewrite benchmark to be on PlayerController level
interface Benchmarked {
	val name: String
	val ai: PlayerController
	fun avg(): Double
	fun stats(): String
}

fun PlayerController.mockBenchmarked(name: String) = object : Benchmarked {
	override val name: String = name
	override val ai: PlayerController = this@mockBenchmarked
	override fun avg(): Double = 0.0
	override fun stats(): String = "MOCKED"
}

class BenchmarkStrategy(override val name: String, private val strategy: Strategy): Strategy, Benchmarked {

	private var totalTime: Long = 0
	private var invokeCount: Int = 0
	private var max: Long = 0

	override val ai: PlayerController = AI(this, false)

	override fun invoke(player: Player, state: State): Int {
		var value: Int? = null
		val time = measureTimeMillis {
			value = strategy(player, state)
		}
		if (time > max) max = time
		totalTime += time
		invokeCount++
		return value!!
	}

	override fun avg() = totalTime / invokeCount.toDouble()
	override fun stats(): String = "${"[${name}]: ".padEnd(40)}avg: ${avg().format(2)}ms, \tmax: ${max}ms, \tCount: $invokeCount"

}

private fun Double.format(digits: Int) = java.lang.String.format("%.${digits}f", this)

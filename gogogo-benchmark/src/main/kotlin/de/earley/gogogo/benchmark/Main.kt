package de.earley.gogogo.benchmark

import de.earley.gogogo.ai.RandomAI
import de.earley.gogogo.game.Game
import de.earley.gogogo.game.State
import kotlin.random.Random
import kotlin.time.Duration
import kotlin.time.ExperimentalTime
import kotlin.time.seconds

fun main() {
	val teams : List<Benchmarked> = emptyList()
	league(teams, timeout = true)
}

private val rand = Random(1337)
fun generateRandomState(): State {
	val randAI = RandomAI(rand)
	val game = Game()
	val turns = rand.nextInt(1, 10)
	repeat(turns) {
		val move = randAI.calculateMove(game.getState())
		game.move(move)
	}
	return game.getState()
}

@OptIn(ExperimentalTime::class)
fun league(strategies: List<Benchmarked>, timeout: Boolean = true) {
	println("Starting league with: ")
	strategies.forEach {
		println("- ${it.name}")
	}
	val hasSingleThreaded = false
	val score = run(
		strategies,
		if (hasSingleThreaded) 1 else 3,
		if (!timeout) Duration.INFINITE else 30.seconds,
		(1..5).map { generateRandomState() } + State.initial()
	)

	println("\nScores:\n")
	score.entries.sortedBy { -it.value }.forEachIndexed { i, e ->
		println("${i + 1}. ${e.key.name}: ${e.value}")
	}

	println("\nStats:\n")

	strategies.sortedBy { it.avg() }.forEach {
			println(it.stats())
	}
}
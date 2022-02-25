package de.earley.gogogo.benchmark

import de.earley.gogogo.ai.Evaluations
import de.earley.gogogo.ai.RandomAI
import de.earley.gogogo.ai.Search
import de.earley.gogogo.game.Game
import de.earley.gogogo.game.State
import kotlin.random.Random
import kotlin.time.Duration
import kotlin.time.ExperimentalTime

fun main() {
	val teams: List<Benchmarked> = listOf(
		RandomAI(),
		RandomAI(),
		RandomAI(),
		Search(depth = 6, evaluation = Evaluations.countTokens, pruning = true, useMemory = true),
//		Search(depth = 4, evaluation = Evaluations.countTokens, pruning = true, useMemory = true),
//		Search(depth = 4, evaluation = Evaluations.sumSquarePosition, pruning = true, useMemory = true),
	).map(::BenchmarkAI)
	league(teams, timeout = true)
}

private val rand = Random(1337)
fun generateRandomState(): State {
	val randAI = RandomAI(rand)
	val game = Game()
	val turns = rand.nextInt(1, 10)
	repeat(turns) {
		val (move, _) = randAI.calculateMove(game.getState())
		game.move(move)
		// if the game is over we can't test the AI
		if (game.isOver()) {
			game.undo()
		}
	}
	return game.getState()
}

@OptIn(ExperimentalTime::class)
fun league(strategies: List<Benchmarked>, timeout: Boolean = true) {
	println("Starting league with: ")
	strategies.forEach {
		println("- ${it.name}")
	}
	val score = run(
		strategies,
		3,
		if (!timeout) Duration.INFINITE else Duration.seconds(30),
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
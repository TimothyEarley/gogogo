package de.earley.gogogo.benchmark

import de.earley.gogogo.ai.*
import de.earley.gogogo.ai.Evaluations.mostForward
import de.earley.gogogo.ai.Evaluations.sumSquarePosition
import de.earley.gogogo.game.*
import kotlin.random.Random
import kotlin.time.ExperimentalTime
import kotlin.time.seconds

val goodStrats = mapOf(
	"4/ss/200" to treeSearchStrategy(4, sumSquarePosition, true, 200),
	"1/mf/-" to treeSearchStrategy(1, mostForward, false)
).map { benchmarkStrategy(it.key, it.value) }

@OptIn(ExperimentalTime::class)
val goodMCs = mapOf(
	"mc/ss/1000/20" to MonteCarlo(sumSquarePosition, 1.seconds, 20, true, false),
	"mc/ss/1000/-" to MonteCarlo(sumSquarePosition, 1.seconds, Int.MAX_VALUE, true, false)
).map { BenchmarkAI(it.key, it.value) }

fun main() {
	val teams = goodStrats + goodMCs

	league(teams, timeout = true)

	println()
	teams.forEach {
		(it.wrapped as? MonteCarlo)?.let { mc ->
			println(it.name + ": " + mc.stats())
		}
	}
}

private val rand = Random(1337)
private val randStrat = random(rand)
fun generateRandomState(): State {
	val game = Game()
	val turns = rand.nextInt(1, 10)
	repeat(turns) {
		val move = randStrat.bestMove(game.player, game.state).move
		game.move(move.from, move.to)
	}
	return game.state
}

fun league(strategies: List<Benchmarked>, timeout: Boolean = true) {
	println("Starting league with: ")
	strategies.forEach {
		println("- ${it.name}")
	}
	val hasSingleThreaded = strategies.any {
		it.ai == RecordedPlayer ||
		((it.ai is BenchmarkAI) && ((it.ai as BenchmarkAI).wrapped is MonteCarlo))
	}
	val score = run(
		strategies,
		if (hasSingleThreaded) 1 else 3,
		if (hasSingleThreaded || !timeout) Long.MAX_VALUE else 30 * 1000L,
		(1..5).map { generateRandomState() } + State.inital
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
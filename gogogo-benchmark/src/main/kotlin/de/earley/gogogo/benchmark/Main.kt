package de.earley.gogogo.benchmark

import de.earley.gogogo.ai.Evaluations.mostForward
import de.earley.gogogo.ai.Evaluations.sumSquarePosition
import de.earley.gogogo.ai.Strategy
import de.earley.gogogo.ai.bestMove
import de.earley.gogogo.ai.random
import de.earley.gogogo.ai.treeSearchStrategy
import de.earley.gogogo.game.*
import java.io.File
import kotlin.concurrent.thread
import kotlin.random.Random


fun allTreeSearchOptions(minLevel: Int, maxLevel: Int, prunes: List<Int>, bases: Map<String, Strategy>, withNoPrune: Boolean = true): List<Benchmarked> = sequence {
	(minLevel..maxLevel).forEach { level ->
		bases.forEach { (name, base) ->
			if (withNoPrune)
				yield(BenchmarkStrategy("$level: $name (-)", treeSearchStrategy(level, base, false)))
			prunes.forEach { prune ->
				yield(BenchmarkStrategy("$level: $name ($prune)", treeSearchStrategy(level, base, true, prune)))
			}
		}
	}
}.toList()

val ranking = mapOf(
	"4/ss/200" to treeSearchStrategy(4, sumSquarePosition, true, 200),
	"4/ss/-" to treeSearchStrategy(4, sumSquarePosition, false),
	"1/mf/-" to treeSearchStrategy(1, mostForward, false),
	"3/ss/-" to treeSearchStrategy(3, sumSquarePosition, false)
).map { BenchmarkStrategy(it.key, it.value) }

val challengers = mapOf(
	"5/ss/30" to treeSearchStrategy(5, sumSquarePosition, true, 40),
	"4/(1/mf/-)/200" to treeSearchStrategy(4, treeSearchStrategy(1, mostForward, false), true, 200),
	"5/(1/mf/-)/200" to treeSearchStrategy(5, treeSearchStrategy(1, mostForward, false), true, 200),
	"6/(1/mf/-)/40" to treeSearchStrategy(5, treeSearchStrategy(1, mostForward, false), true, 40)
	).map { BenchmarkStrategy(it.key, it.value) }

fun main() {
	val file = File("player.save")
	if (file.exists()) RecordedPlayer.load(file)

	Runtime.getRuntime().addShutdownHook(thread(false) {
		RecordedPlayer.save(file)
	})

	val human = RecordedPlayer.mockBenchmarked("player")

	league(ranking + challengers)
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

//TODO add random starting games and give each opponent a chance to play it.
// with a fixed seed this should be reproducible. This should make testing more robust
fun league(strats: List<Benchmarked>) {
	val hasHuman = strats.filter { it.ai == RecordedPlayer }.isNotEmpty()
	val score = run(
		strats,
		if (hasHuman) 1 else 4,
		if (hasHuman) Long.MAX_VALUE else 30 * 1000L,
		(1..10).map { generateRandomState() } + State.inital
	)

	println("\nScores:\n")
	score.entries.sortedBy { -it.value }.forEachIndexed { i, e ->
		println("${i + 1}. ${e.key.name}: ${e.value}")
	}

	println("\nStats:\n")

	strats.sortedBy { it.avg() }.forEach {
			println(it.stats())
	}
}
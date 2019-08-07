package de.earley.gogogo.benchmark

import de.earley.gogogo.ai.*
import de.earley.gogogo.game.*
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.withTimeoutOrNull
import java.io.File
import kotlin.concurrent.thread

val evaluations = mapOf(
	"mostForward" to Evaluations.mostForward,
	"sumPosition" to Evaluations.sumPosition,
	"sumSquarePosition" to Evaluations.sumSquarePosition
)

fun setOfStrategies(name: String, baseStrategy: Strategy): Map<String, Strategy> = mapOf(
	"hard ($name)" to treeSearchStrategy(2, baseStrategy, false),
	"superStrategy ($name)" to treeSearchStrategy(3, baseStrategy, false),
	"prunedSuper ($name)" to treeSearchStrategy(3, baseStrategy, true, 10),
	"extreme ($name)" to treeSearchStrategy(4, baseStrategy, false)
)

val allOpponents = evaluations
	.map { (name, eval) -> setOfStrategies(name, eval) }
	.fold(emptyMap<String, Strategy>()) { acc, t -> acc + t }
	.map { (name, strategy) -> BenchmarkStrategy(name, strategy) }

fun main() {
	val file = File("player.save")
	if (file.exists()) RecordedPlayer.load(file)

	Runtime.getRuntime().addShutdownHook(thread(false) {
		RecordedPlayer.save(file)
	})

	val opponents = listOf(
		RecordedPlayer.mockBenchmarked("player"),
		RecordedPlayer.mockBenchmarked("player"),
//		BenchmarkStrategy("randomBase", randomBase)
		BenchmarkStrategy("easy", easy),
		BenchmarkStrategy("medium", medium),
		BenchmarkStrategy("hard", hard),
		BenchmarkStrategy("superStrategy", superStrategy),
		BenchmarkStrategy("extreme", extreme),
		BenchmarkStrategy("base", base)
//		BenchmarkStrategy("random", random)
	)

	league(opponents)
}

fun league(strats: List<Benchmarked>) {
	val score: MutableMap<Benchmarked, Int> = mutableMapOf()
	for (first in 0 until strats.size) {
		for (second in first + 1 until strats.size) {
			val a = strats[first]
			val b = strats[second]
			val (aScore, bScore) = benchmark(a, b, 2)
			score.merge(a, aScore, Int::plus)
			score.merge(b, bScore, Int::plus)
		}
	}

	score.entries.sortedBy { it.value }.forEach {
		println("${it.key.name}: ${it.value}")
	}

	strats.sortedBy { it.avg() }.forEach {
			println(it.stats())
	}
}

fun benchmark(a: Benchmarked, b: Benchmarked, n: Int): Pair<Int, Int> {

	return runBlocking {

		print("${a.name} vs ${b.name}: ")

		val result = runBothSidesRepeated(
			a.name, a.ai,
			b.name, b.ai,
			n)

		println(result)

		result.getOrDefault(a.name, 0) to result.getOrDefault(b.name, 0)
	}

}

suspend fun runBothSidesRepeated(nameA: String, a: PlayerController, nameB: String, b: PlayerController, n: Int): Map<String, Int> {

	fun Map<Player?, Int>.mapKeysTo(red: String, blue: String): Map<String, Int> =
			mapKeys { when (it.key) {
				Player.Red -> red
				Player.Blue -> blue
				else -> "Draw"
			}}

	val wins = runSameSideRepeated(a, b, n/2)
		.mapKeysTo(nameA, nameB)
		.toMutableMap()

	runSameSideRepeated(b, a, n/2)
		.mapKeysTo(nameB, nameA)
		.forEach { key, value -> wins.merge(key, value, Int::plus) }

	return wins
}


suspend fun runSameSideRepeated(red: PlayerController, blue: PlayerController, n: Int): Map<Player?, Int> {
	return (1..n).map {
		runGame(red, blue).also {
			print(it?.name?.get(0) ?: "D")
		}
	}.groupingBy { it }.eachCount().also {
		print(", ")
	}
}

object NoOpUiHook : UIHook {
	override fun onSelect(point: Point?) {}
	override fun onGameEnd() {}
	override suspend fun onMove(move: Move) {}
}

suspend fun runGame(red: PlayerController, blue: PlayerController, timeout: Long = Long.MAX_VALUE): Player? =
	withTimeoutOrNull(timeout) {
		val game = ControlledGame(red, blue, NoOpUiHook)
		with(game) {
			start().join()
		}
		game.victor
	}
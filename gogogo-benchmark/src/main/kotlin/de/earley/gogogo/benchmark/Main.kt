package de.earley.gogogo.benchmark

import de.earley.gogogo.ai.*
import de.earley.gogogo.game.*
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.runBlocking

fun main() {

	fun namedPruned(level: Int, prune: Int) =
		NamedBenchmarkStrat("p($level/$prune)", hardPruneLevel(level, prune))

	val best = NamedBenchmarkStrat("SUPER") { player, state ->
		treeSearch(player, state, 3, false, 0, 0)
	}

	val opponents = listOf(
//		NamedBenchmarkStrat("easy", easy),
//		NamedBenchmarkStrat("medium", easy),
		NamedBenchmarkStrat("hard", hard),
		namedPruned(3, 4),
//		namedPruned(4, 4),
		NamedBenchmarkStrat("SUPER") { player, state ->
			treeSearch(player, state, 3, false, 0, 0)
		},
		namedPruned(4, 10)
//		NamedBenchmarkStrat("EXTREME") { player, state ->
//			treeSearch(player, state, 4, false, 0, 0)
//		}
	)

	league(opponents)

}

fun againstBase(base: NamedBenchmarkStrat, opponents: List<NamedBenchmarkStrat>) {
	opponents.forEach {
		benchmark(base, it, 2)
	}

	(opponents + base).sortedBy { it.avg() }.forEach {
		println(it.stats())
	}
}

fun league(strats: List<NamedBenchmarkStrat>) {
	val score: MutableMap<NamedBenchmarkStrat, Int> = mutableMapOf()
	for (first in 0 until strats.size) {
		for (second in first + 1 until strats.size) {
			val a = strats[first]
			val b = strats[second]
			val (aScore, bScore) = benchmark(a, b, 10)
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

fun benchmark(a: NamedBenchmarkStrat, b: NamedBenchmarkStrat, n: Int): Pair<Int, Int> {

	return runBlocking {

		print("${a.name} vs ${b.name}: ")

		val result = runBothSidesRepeated(
			a.name, AI(a, false),
			b.name, AI(b, false),
			n)

		println(result)

		result.getOrDefault(a.name, 0) to result.getOrDefault(b.name, 0)
	}

}

suspend fun runBothSidesRepeated(nameA: String, a: AI, nameB: String, b: AI, n: Int): Map<String, Int> {

	fun Map<Player, Int>.mapKeysTo(red: String, blue: String): Map<String, Int> =
			mapKeys { when (it.key) {
				Player.Red -> red
				Player.Blue -> blue
			}}

	val wins = runSameSideRepeated(a, b, n/2)
		.mapKeysTo(nameA, nameB)
		.toMutableMap()

	runSameSideRepeated(b, a, n/2)
		.mapKeysTo(nameB, nameA)
		.forEach { key, value -> wins.merge(key, value, Int::plus) }

	return wins
}


suspend fun runSameSideRepeated(red: AI, blue: AI, n: Int): Map<Player, Int> {
	return (1..n).map {
		runGame(red, blue).also {
			print(it.name[0])
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

suspend fun runGame(red: AI, blue: AI): Player {
	val game = ControlledGame(red, blue, NoOpUiHook)
	coroutineScope {
		with(game) {
			start()
		}
	}
	return game.victor!!
}
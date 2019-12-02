package de.earley.gogogo.benchmark

import de.earley.gogogo.ai.*
import de.earley.gogogo.ai.Evaluations.mostForward
import de.earley.gogogo.ai.Evaluations.sumSquarePosition
import de.earley.gogogo.game.*
import java.io.File
import kotlin.concurrent.thread
import kotlin.random.Random


fun allTreeSearchOptions(minLevel: Int, maxLevel: Int, prunes: List<Int>, bases: Map<String, Strategy>, withNoPrune: Boolean = true): List<Benchmarked> = sequence {
	(minLevel..maxLevel).forEach { level ->
		bases.forEach { (name, base) ->
			if (withNoPrune)
				yield(benchmarkStrategy("$level: $name (-)", treeSearchStrategy(level, base, false)))
			prunes.forEach { prune ->
				yield(benchmarkStrategy("$level: $name ($prune)", treeSearchStrategy(level, base, true, prune)))
			}
		}
	}
}.toList()


/*
1. 4/ss/200: 43
2. 4/ss/-: 43
3. 3/ss/-: 26
4. 1/mf/-: 20

[1/mf/-]:    avg: 0.01ms, 	max: 14ms, 	Count: 5003
[3/ss/-]:    avg: 1.15ms, 	max: 27ms, 	Count: 4986
[4/ss/200]:  avg: 9.84ms, 	max: 323ms, Count: 7178
[4/ss/-]:    avg: 17.06ms, 	max: 287ms, Count: 7178

1. 4/ss/200: 123
2. mc(ss,1000): 106
3. mc(1/mf/-,500): 97
4. mc(ss,500): 94
5. mc(rand,1000): 74
6. 1/mf/-: 61
7. mc(rand,500): 60
8. mc(3/ss/200,500): 1

Stats:

[1/mf/-]:                               avg: 262us, 	max: 17.0ms, 	Count: 931
[4/ss/200]:                             avg: 321ms, 	max: 1.86s, 	Count: 1222
[mc(1/mf/-,500)]:                       avg: 502ms, 	max: 605ms, 	Count: 1231
[mc(rand,500)]:                         avg: 504ms, 	max: 634ms, 	Count: 1036
[mc(ss,500)]:                           avg: 506ms, 	max: 657ms, 	Count: 1032
[mc(3/ss/200,500)]:                     avg: 651ms, 	max: 1.36s, 	Count: 1092
[mc(rand,1000)]:                        avg: 1.00s, 	max: 1.20s, 	Count: 1003
[mc(ss,1000)]:                          avg: 1.02s, 	max: 1.23s, 	Count: 1003

mc(ss,1000):      Rounds=1002, sims=209982757, sims/round=209563.62974051895
mc(1/mf/-,500):   Rounds=1231, sims= 65950266, sims/round= 53574.545897644195
mc(ss,500):       Rounds=1032, sims=105348050, sims/round=102081.44379844962
mc(rand,1000):    Rounds=1003, sims=155762177, sims/round=155296.28813559323
mc(rand,500):     Rounds=1036, sims= 60505260, sims/round= 58402.76061776062
mc(3/ss/200,500): Rounds=1092, sims=   536943, sims/round=   491.70604395604397

 */
val ranking = mapOf(
	"4/ss/200" to treeSearchStrategy(4, sumSquarePosition, true, 200),
	"4/ss/-" to treeSearchStrategy(4, sumSquarePosition, false),
	"1/mf/-" to treeSearchStrategy(1, mostForward, false),
	"3/ss/-" to treeSearchStrategy(3, sumSquarePosition, false)
).map { benchmarkStrategy(it.key, it.value) }

val challengers = mapOf(
	"5/ss/40" to treeSearchStrategy(5, sumSquarePosition, true, 40),
	"4/(1/mf/-)/200" to treeSearchStrategy(4, treeSearchStrategy(1, mostForward, false), true, 200),
	"5/(1/mf/-)/200" to treeSearchStrategy(5, treeSearchStrategy(1, mostForward, false), true, 200),
	"6/(1/mf/-)/40" to treeSearchStrategy(5, treeSearchStrategy(1, mostForward, false), true, 40)
	).map { benchmarkStrategy(it.key, it.value) }

val monteCarlos = listOf(1000).flatMap { timeout ->
	listOf(
		"rand" to random(),
		"1/mf/-" to treeSearchStrategy(1, mostForward, false),
		"ss" to sumSquarePosition
	).flatMap { (name, strat) ->
		listOf(true, false).flatMap { caching ->
			listOf(20, Int.MAX_VALUE).map { limit ->
				"mc($name,$timeout,${if (limit == Int.MAX_VALUE) "-" else "$limit"},$caching)" to MonteCarlo(
					strat,
					timeout,
					limit,
					caching
				)
			}
		}
	}
}.map { BenchmarkAI(it.first, it.second) }

fun main() {
//	val human = loadHuman()

	val mc = BenchmarkAI("mc", MonteCarlo(
		random(),
		5000,
		Int.MAX_VALUE,
		true
	))

	val mc2 = BenchmarkAI("mc", MonteCarlo(
		treeSearchStrategy(4, sumSquarePosition, true, 200),
		5000,
		Int.MAX_VALUE,
		true
	))

	league(listOf(ranking.first()) + mc + mc2, timeout = false)

	println()
	println("mc: " + (mc.wrapped as MonteCarlo).stats())
	println("mc2: " + (mc2.wrapped as MonteCarlo).stats())
//	monteCarlos.forEach {
//		println(it.name + ": " + (it.wrapped as MonteCarlo).stats())
//	}
}

private fun loadHuman(): Benchmarked {
	val file = File("player.save")
	if (file.exists()) RecordedPlayer.load(file)

	Runtime.getRuntime().addShutdownHook(thread(false) {
		RecordedPlayer.save(file)
	})

	return RecordedPlayer.mockBenchmarked("player")
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

fun league(strats: List<Benchmarked>, timeout: Boolean = true) {
	val hasHuman = strats.any { it.ai == RecordedPlayer }
	val score = run(
		strats,
		if (hasHuman) 1 else 3,
		if (hasHuman || !timeout) Long.MAX_VALUE else 30 * 1000L,
		(1..5).map { generateRandomState() } + State.inital
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
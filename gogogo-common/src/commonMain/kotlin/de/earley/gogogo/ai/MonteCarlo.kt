package de.earley.gogogo.ai

import de.earley.gogogo.game.*
import kotlin.math.ln
import kotlin.math.sqrt
import kotlin.time.*

//TODO expand children only when needed
//TODO advanced feature: pondering (start thinking on opponents move, i.e. while human is moving), reuse trees, etc.
/*
1. 4/ss/200: 170
2. 4/ss/-: 170
3. 3/ss/-: 156
4. 1/mf/-: 131
5. mc(rand,1000,20,true): 82
6. mc(ss,1000,20,false): 75
7. mc(ss,1000,-,false): 74
8. mc(1/mf/-,1000,-,false): 72
9. mc(ss,1000,-,true): 72
10. mc(ss,1000,20,true): 71
11. mc(1/mf/-,1000,20,false): 70
12. mc(1/mf/-,1000,20,true): 67
13. mc(rand,1000,20,false): 63
14. mc(1/mf/-,1000,-,true): 62
15. mc(rand,1000,-,false): 59
16. mc(rand,1000,-,true): 46

Stats:

[1/mf/-]:                               avg: 240us, 	max: 19.9ms, 	Count: 1345
[3/ss/-]:                               avg: 45.7ms, 	max: 229ms, 	Count: 1227
[4/ss/200]:                             avg: 409ms, 	max: 2.70s, 	Count: 1498
[4/ss/-]:                               avg: 589ms, 	max: 2.34s, 	Count: 1483
[mc(rand,1000,-,true)]:                 avg: 1.01s, 	max: 1.15s, 	Count: 2815
[mc(rand,1000,20,false)]:               avg: 1.01s, 	max: 1.11s, 	Count: 2348
[mc(rand,1000,20,true)]:                avg: 1.01s, 	max: 2.22s, 	Count: 2504
[mc(1/mf/-,1000,-,true)]:               avg: 1.02s, 	max: 3.61s, 	Count: 3322
[mc(ss,1000,20,true)]:                  avg: 1.03s, 	max: 3.39s, 	Count: 2494
[mc(ss,1000,-,true)]:                   avg: 1.04s, 	max: 4.00s, 	Count: 2774
[mc(1/mf/-,1000,20,false)]:             avg: 1.05s, 	max: 3.70s, 	Count: 3296
[mc(1/mf/-,1000,20,true)]:              avg: 1.06s, 	max: 3.90s, 	Count: 3268
[mc(1/mf/-,1000,-,false)]:              avg: 1.09s, 	max: 4.00s, 	Count: 3272
[mc(ss,1000,20,false)]:                 avg: 1.11s, 	max: 4.00s, 	Count: 2658
[mc(rand,1000,-,false)]:                avg: 1.12s, 	max: 3.81s, 	Count: 2852
[mc(ss,1000,-,false)]:                  avg: 1.21s, 	max: 3.99s, 	Count: 2768

mc(rand,1000,20,true): Rounds=2504, sims=214140668, sims/round=85519.43610223642
mc(rand,1000,-,true): Rounds=2815, sims=131875149, sims/round=46847.299822380104
mc(rand,1000,20,false): Rounds=2348, sims=168046559, sims/round=71570.08475298126
mc(rand,1000,-,false): Rounds=2853, sims=163232608, sims/round=57214.373641780585
mc(1/mf/-,1000,20,true): Rounds=3268, sims=178206804, sims/round=54530.84577723378
mc(1/mf/-,1000,-,true): Rounds=3322, sims=171232426, sims/round=51544.980734497294
mc(1/mf/-,1000,20,false): Rounds=3296, sims=189624759, sims/round=57531.78367718447
mc(1/mf/-,1000,-,false): Rounds=3272, sims=180473162, sims/round=55156.83435207824
mc(ss,1000,20,true): Rounds=2492, sims=169782860, sims/round=68131.16372391653
mc(ss,1000,-,true): Rounds=2773, sims=178871289, sims/round=64504.61197259286
mc(ss,1000,20,false): Rounds=2658, sims=175821592, sims/round=66148.07825432657
mc(ss,1000,-,false): Rounds=2768, sims=181358300, sims/round=65519.617052023124
 */



private data class Node(
	val state: State,
	val move: Move? = null,
	val parent: Node? = null,
	var children: List<Node> = emptyList(),
	var visits: Int = 0,
	var wins: Int = 0,
	var draws: Int = 0
) {
	fun accScore(): Double = wins + draws.toDouble()/2
	fun score(): Double = if (visits == 0) Double.MIN_VALUE else (accScore() / visits)
	override fun toString(): String
		= "Node(  move=$move, visits=$visits, wins=$wins, draws=$draws, score=${score()})"
}

@UseExperimental(ExperimentalTime::class)
class MonteCarlo(
	private val playoutStrategy: Strategy, //TODO use a caching playout strategy??
	private val timeoutMs: Int,
	private val playoutLimit: Int,
	private val caching: Boolean
) : PlayerController {
	override val name: String = "MonteCarlo"

	private var simulations = 0
	private var rounds = 0

	private var cachedChosen: Node? = null

	fun stats() = "Rounds=$rounds, sims=$simulations, sims/round=${simulations.toDouble()/rounds}"

	override suspend fun getMove(
		lastMove: Move?,
		state: State,
		fromSelectCallback: (Point?) -> Unit
	): Move {
		val root = evaluateRootNode(state, state.playersTurn)
		val chosen = root.children.maxBy { it.score() }
		if (caching) cachedChosen = chosen
		return chosen?.move ?: error("No moves. Did we timeout?") //TODO chose a random move if we have no children?
	}

	/**
	 * Values from 0 to 100
	 */
	fun asStrategy(): Strategy = {player, state ->
		val root = evaluateRootNode(state, player)
		//TODO caching?
		(root.score() * 100).toInt()
	}

	private fun evaluateRootNode(
		state: State,
		player: Player
	): Node {
		//TODO timeout relative to state depth?
		val start = MonoClock.markNow().plus(timeoutMs.milliseconds)

		val cachedRootMatch = if (caching && cachedChosen != null) {
			// can we reach this new state from the cached root?
			// go down 2 levels
			//TODO infer caching from lastMove
			cachedChosen!!.children.find { it.state == state }?.copy(
				parent = null // remove parent link, i.e. truncate to root. This reduces backprop time (and mem usage)
			)
		} else null

		val root = cachedRootMatch ?: Node(state)

		while (start.hasNotPassedNow()) {
			val selected = select(root)
			if (!selected.isDone()) {
				expand(selected)
			}
			val toExplore = selected.chooseChildUCT() ?: selected
			val result = playout(toExplore)
			val score = when (result.victor) {
				player -> WinLossDraw.WIN
				player.next() -> WinLossDraw.LOSS
				else -> WinLossDraw.DRAW
			}
			toExplore.backprop(score)
		}

		rounds++
		simulations += root.visits

		return root
	}

	private enum class WinLossDraw(val flip: () -> WinLossDraw) {
		WIN({LOSS}), LOSS({WIN}), DRAW({DRAW})
	}

	private fun Node.backprop(winLossDraw: WinLossDraw) {
		visits++
		when (winLossDraw) {
			WinLossDraw.WIN -> wins++
			WinLossDraw.LOSS -> {/*SKIP*/}
			WinLossDraw.DRAW -> draws++
		}
		this.parent?.backprop(winLossDraw.flip())
	}

	private fun select(from: Node): Node {
		var current = from
		while (current.children.isNotEmpty()) {
			current = current.chooseChildUCT() ?: return current
		}
		return current
	}

	private fun Node.chooseChildUCT(): Node? {
		val parentVisit = visits
		return children.maxBy { uct(it, parentVisit) }
	}

	private fun uct(node: Node, totalVisits: Int): Double =
		if (node.visits != 0) {
			node.accScore() / node.visits + 1.41 * sqrt(ln(totalVisits.toDouble()) / node.visits)
		} else {
			Double.MAX_VALUE
		}

	private fun expand(node: Node) {
		require(node.children.isEmpty())
		node.children = node.state
			.findAllMoves()
			.map { Node(it.state, it.move, node, emptyList(), 0, 0) }
			.toList()

	}

	private fun playout(node: Node): State {
		var state = node.state
		var i = 0
		while (state.victor == null && i < playoutLimit) {
			i++
			state = playoutStrategy.bestMove(state.playersTurn, state).state
		}
		return state
	}

	private fun Node.isDone(): Boolean = state.victor != null
}

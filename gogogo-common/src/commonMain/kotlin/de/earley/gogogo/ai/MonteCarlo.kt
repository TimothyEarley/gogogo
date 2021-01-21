package de.earley.gogogo.ai

import de.earley.gogogo.game.*
import kotlinx.coroutines.*
import kotlin.coroutines.CoroutineContext
import kotlin.math.ln
import kotlin.math.sqrt
import kotlin.time.Duration
import kotlin.time.ExperimentalTime
import kotlin.time.TimeSource

//TODO expand children only when needed
//TODO advanced feature: pondering (start thinking on opponents move, i.e. while human is moving), reuse trees, etc.
private data class Node(
    val state: State,
    val move: Move? = null,
    val parent: Node? = null,
    var children: List<Node> = emptyList(),
    var visits: Int = 0,
    var wins: Int = 0,
    var draws: Int = 0
) {
    fun accScore(): Double = wins + draws.toDouble() / 2
    fun score(): Double = if (visits == 0) Double.MIN_VALUE else (accScore() / visits)
    override fun toString(): String = "Node(  move=$move, visits=$visits, wins=$wins, draws=$draws, score=${score()})"
}

// not thread safe !!!, i.e. can only play one game at a time
@OptIn(ExperimentalTime::class)
class MonteCarlo(
    private val playoutStrategy: Evaluation, //TODO use a caching playout strategy??
    private val timeout: Duration,
    private val playoutLimit: Int,
    private val caching: Boolean,
    private val pondering: Boolean
) : PlayerController, CoroutineScope {
    override val name: String = "MonteCarlo"
    override val coroutineContext: CoroutineContext
        get() = Dispatchers.Default

    private var simulations = 0
    private var rounds = 0

    private var cachedChosen: Node? = null
    private var ponderJob: Job? = null
    private var lastVisits: Int = 0 // debug

    fun stats() = "Rounds=$rounds, sims=$simulations, sims/round=${simulations.toDouble() / rounds}"

    override suspend fun getMove(
        lastMove: Move?,
        state: State,
        fromSelectCallback: (Point?) -> Unit
    ): Pair<Move, List<Line>?> {

        // stop pondering
        if (pondering) {
            ponderJob?.cancelAndJoin()
            ponderJob = null
        }

        val root = evaluateRootNode(state, state.playersTurn)
        val chosen = root.children.maxByOrNull { it.score() }
        if (caching) cachedChosen = chosen
        // start pondering again
        if (pondering) {
            lastVisits = chosen?.visits ?: 0
            ponder()
        }

        val move = chosen?.move ?: error("No moves. Did we timeout?") //TODO chose a random move if we have no children?

        return move to extractLines(root, 10, 10)
    }

    private fun extractLines(root: Node, depth: Int, keep: Int): List<Line> {
        return if ((root.children.isEmpty() || depth == 0) && root.move != null) {
            // we have no children, the line ends here
            listOf(
                Line(
                    evaluation = root.intScore(),
                    moves = listOf(root.move)
                )
            )
        } else {
            root.children
                .flatMap { node ->
                    extractLines(node, depth - 1, keep).map { it.prepend(node.move!!).copy(evaluation = node.intScore()) }
                }
                .sortedByDescending { it.evaluation }
                .take(keep)
        }
    }

    private fun Node.intScore(): Int = (score() * 100).toInt()

    private fun ponder() {
        require(ponderJob == null)
        require(caching)
        val maxSims = 8000
        var sims = 0
        //TODO scope async better (i.e. when do we stop pondering)
        ponderJob = launch {
            while (isActive && sims < maxSims) {
                yield()
                cachedChosen?.let { root ->
                    evaluate(root, root.state.playersTurn)
                }
                sims++
            }
        }
    }

    private fun evaluateRootNode(
        state: State,
        player: Player
    ): Node {
        //TODO timeout relative to state depth?
        val start = TimeSource.Monotonic.markNow().plus(timeout)

        val minSims = 2500
        var sims = 0

        val cachedRootMatch = if (caching && cachedChosen != null) {
            // can we reach this new state from the cached root?
            // go down 2 levels
            //TODO infer caching from lastMove
            cachedChosen!!.children.find { it.state == state }?.copy(
                parent = null // remove parent link, i.e. truncate to root. This reduces backprop time (and mem usage)
            )
        } else null
        println("Found in cache: $cachedRootMatch")

        val root = cachedRootMatch ?: Node(state)

        while (sims < minSims || start.hasNotPassedNow()) {
            evaluate(root, player)
            sims++
        }

        rounds++
        simulations += root.visits

        return root
    }

    private fun evaluate(root: Node, player: Player) {
        val selected = select(root)
        if (!selected.isDone()) {
            expand(selected)
        }
        val toExplore = selected.chooseChildUCT() ?: selected
        val result = playOut(toExplore)
        val score = when (result.victor) {
            player -> WinLossDraw.WIN
            player.next() -> WinLossDraw.LOSS
            else -> WinLossDraw.DRAW
        }
        toExplore.backprop(score)
    }

    private enum class WinLossDraw(val flip: () -> WinLossDraw) {
        WIN({ LOSS }), LOSS({ WIN }), DRAW({ DRAW })
    }

    private fun Node.backprop(winLossDraw: WinLossDraw) {
        visits++
        when (winLossDraw) {
            WinLossDraw.WIN -> wins++
            WinLossDraw.LOSS -> {/*SKIP*/
            }
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
        return children.maxByOrNull { uct(it, parentVisit) }
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

    private fun playOut(node: Node): State {
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

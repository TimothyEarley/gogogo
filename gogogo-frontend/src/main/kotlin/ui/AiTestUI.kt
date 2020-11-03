package de.earley.gogogo.ui

import de.earley.gogogo.ai.*
import de.earley.gogogo.ai.debug.*
import de.earley.gogogo.game.*
import de.earley.gogogo.game.grid.GameGrid
import de.earley.gogogo.game.grid.copy
import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.ol
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLElement
import kotlinx.browser.document
import kotlinx.dom.clear

class AiTestUI(
	private val menu: MenuUI
)  {

	private val exit = document.get<HTMLButtonElement>("btn-exit-ai-test")

	private val eventListeners = EventListenerCollection()

	private val grid = UIGrid(document.get("ai-game-grid"))
	private val list = document.get<HTMLElement>("ai-list")
	private val tree = document.get<HTMLElement>("ai-tree")

	//TODO split into presenter?
	private var state: State = State.inital
	private var selected: Point? = null

	init {

		eventListeners += exit.onClick {
			exit()
		}

		grid.onClick(eventListeners) { x, y ->
			println("Clicked $x/$y with selected=$selected")
			if (selected != null) {
				// manipulate state
				state = state.forceMove(selected!!, Point(x, y))
				selected = null
			} else {
				selected = Point(x, y)
			}
			updateUI()
		}

		updateUI()

	}

	private fun updateUI() {
		grid.setClasses(Game(state), selected)

		// show AI tree
		showAITree()
	}


	private fun exit() {
		eventListeners.close()
		menu.closeAiTest()
	}

	private fun showAITree() {
		val strategy: DebugStrategy = superDebug
		val player = state.playersTurn

		val t = strategy(player, state, "root")


		list.clear()
		list.appendChild(document.create.ol {
			li {
				text("It is $player turn.")
			}
			id = tree.id
			t.children
				.map { it.v }
				.sortedByDescending { it.evaluation }
				.take(5)
				.map { it.label }
				.forEach {
					println("Adding li: $it")
					li {
						text(it)
					}
				}
		})

//		val t = generateTree("root", state, 2, strategy, state.playersTurn)
//		val values = t.walk().map(Pair<String, Int>::second).toList()

		val values = t.walk().map(MoveEvaluation::evaluation).toList()

		val clamp = -1000..1000 // avoid problems with MAX_INT etc.
		val min = values.minOrNull()!!.coerceIn(clamp)
		val max = values.maxOrNull()!!.coerceIn(clamp)

		tree.clear()
		val ul = document.create.ul {
			t.html(this, MoveEvaluation::label, {it.evaluation.toString()}) { (_, i, pl) ->
				val sane = i.coerceIn(clamp)
				val p = ((sane - min) * 0xff) / (max - min)
				println("i=$i, sane=$sane, $p, min=$min, max=$max")
				val c = p.toString(16).padStart(2, '0')
				if (pl == Player.Red) "#ff$c$c" else "#$c${c}ff"
			}
		}
		tree.appendChild(ul)
	}

	private fun generateTree(label: String, state: State, maxDepth: Int, strategy: Strategy, player: Player): Tree<Pair<String, Int>> =
		Tree(
			label to strategy(player, state),
			if (maxDepth == 0) emptyList()
			else state.findAllMoves().map {
				val desc = it.move.run { "${from.x}/${from.y} -> ${to.x}/${to.y}" }
				generateTree(desc, it.state, maxDepth - 1, strategy, player)
			}.toList()
		)

}

private fun State.forceMove(from: Point, to: Point): State {
	return copy(
		grid = grid.copy {
			this[to] = grid[from.x, from.y]
			this[from] = null
		} as GameGrid
	)
}

private fun <T> Tree<T>.html(ul: UL, label: (T) -> String, title: (T) -> String, color: (T) -> String) {
	ul.li {
		span(classes = "tf-nc") {
			style = "background-color: ${color(v)}"
			this.title = title(v)
			text(label(v))
		}
		if (children.isEmpty()) return@li

		ul {
			children.forEach {
				it.html(this, label, title, color)
			}
		}
	}
}

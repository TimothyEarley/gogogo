package de.earley.gogogo.ui

import de.earley.gogogo.ai.Strategy
import de.earley.gogogo.ai.base
import de.earley.gogogo.ai.findAllMoves
import de.earley.gogogo.game.*
import de.earley.gogogo.game.grid.GameGrid
import de.earley.gogogo.game.grid.copy
import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.li
import kotlinx.html.js.ol
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.Node
import kotlin.browser.document
import kotlin.dom.clear

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
		val strategy = base

		list.clear()
		list.appendChild(document.create.ol {
			id = tree.id
			state.findAllMoves()
				.map { (move, state) ->
					move to strategy(state.playersTurn, state)
				}
				.sortedByDescending { (_, score) -> score }
				.map { (move, score) -> "$move: $score" }
				.forEach {
					println("Adding li: $it")
					li {
						text(it)
					}
				}
		})

		val t = generateTree("root", state, 2)


		tree.clear()
		val ul = document.create.ul {
			t.partHTML(this)
		}
		tree.appendChild(ul)
	}

	private fun generateTree(label: String, state: State, maxDepth: Int): Tree<String> = Tree(
		label,
		if (maxDepth == 0) emptyList()
		else state.findAllMoves().map { generateTree(it.move.toString(), it.state, maxDepth - 1) }.toList()
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

data class Tree<T>(val v: T, val children: List<Tree<T>>)

private fun <T : Comparable<T>> Tree<T>.partHTML(ul: UL) {
	ul.li {
		span(classes = "tf-nc") {
			text(v.toString())
		}
		if (children.isEmpty()) return@li

		ul {
			children.sortedBy { it.v }.forEach {
				it.partHTML(this)
			}
		}
	}
}

package de.earley.gogogo.ui

import de.earley.gogogo.game.Move
import de.earley.gogogo.game.PlayerController
import de.earley.gogogo.game.Point
import de.earley.gogogo.game.State
import kotlinx.coroutines.channels.Channel

class HumanController : PlayerController {
	override val name: String = "Human"

	private var from: Point? = null
	private var to: Point? = null

	private var selectCallback: ((Point?) -> Unit)? = null
	private var state: State? = null

	private val commit: Channel<Move> = Channel(1)

	override suspend fun getMove(lastMove: Move?, state: State, fromSelectCallback: (Point?) -> Unit): Move {

		selectCallback = fromSelectCallback
		this.state = state

		// wait for commit
		val move = commit.receive()

		// reset variables
		from = null
		to = null
		selectCallback = null
		this.state = null

		return move
	}


	fun supplyClick(point: Point) {

		val s = state
		require(s != null) { "Can't evaluate move since the state is unknown" }

		// is this the first click?
		if (from == null) {

			if (!s.isEligibleToMove(point)) {
				// Cannot move the clicked so not doing anything
				return
			}

			from = point
			selectCallback?.invoke(point)
			return
		}


		val f = from
		require(f != null) { "From is null" }

		// is this an invalid click?
		if (s.move(f, point) == null) {
			// illegal move -> unselect
			from = null
			selectCallback?.invoke(null)
			return
		}

		//last option is the move is legal, so do the move
		to = point

		require(commit.offer(Move(from!!, to!!))) { "Could not send commit" }
	}

}
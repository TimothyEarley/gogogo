package de.earley.gogogo.controller

import de.earley.gogogo.Log
import de.earley.gogogo.game.*
import de.earley.gogogo.game.grid.Point
import kotlinx.coroutines.channels.Channel

class HumanController : PlayerController {
	override val name: String = "Human"

	private var from: Point? = null

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
		selectCallback = null
		this.state = null

		return move
	}


	fun supplyClick(point: Point) {
		Log.debug { "Human clicked $point. From: $from" }

		val s = state
		//TODO figure out error
		if (s == null) {
			Log.error { "Not the players turn. (Or we missed the state.)" }
			return
		}

		// is this the first click?
		if (from == null) {

			if (!s.isEligibleToMove(point)) {
				Log.info { "Illegal from: $point" }
				// Cannot move the clicked so not doing anything
				return
			}

			from = point
			selectCallback?.invoke(point)
			return
		}


		Log.debug { "Move $from to $point" }

		require(commit.offer(Move(from!!, point))) { "Could not send commit" }
	}

}
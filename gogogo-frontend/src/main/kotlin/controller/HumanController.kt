package de.earley.gogogo.ui

import de.earley.gogogo.Log
import de.earley.gogogo.game.*
import kotlinx.coroutines.channels.Channel

class HumanController : PlayerController {
	override val name: String = "Human"

	private var from: Point? = null
	private var to: Point? = null

	private var selectCallback: ((Point?) -> Unit)? = null
	private var state: State? = null

	private val commit: Channel<Move> = Channel(1)

	override suspend fun getMove(lastMove: Move?, state: State, fromSelectCallback: (Point?) -> Unit): Pair<Move, List<Line>?> {

		selectCallback = fromSelectCallback
		this.state = state

		// wait for commit
		val move = commit.receive()

		// reset variables
		from = null
		to = null
		selectCallback = null
		this.state = null

		return move to null
	}


	fun supplyClick(point: Point) {
		Log.debug { "Human clicked $point. From: $from" }

		val s = state
//		require(s != null) { "Can't evaluate move since the state is unknown" }
		//TODO figure out error
		if (s == null) {
			Log.error { "Can't evaluate move since the state is unknown" }
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


		val f = from
		require(f != null) { "From is null" }

		// is this an invalid click?
		val move = s.move(f, point)
		if (move is MoveResult.Error) {
			Log.info { "Illegal move, resetting: ${move.msg}"}
			//TODO inform player
			// illegal move -> unselect
			from = null
			selectCallback?.invoke(null)
			return
		}

		//last option is the move is legal, so do the move
		to = point

		Log.debug { "Move $from to $to" }

		require(commit.offer(Move(from!!, to!!))) { "Could not send commit" }
	}

}
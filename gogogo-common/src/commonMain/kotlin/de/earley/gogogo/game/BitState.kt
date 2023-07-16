package de.earley.gogogo.game

import de.earley.gogogo.game.grid.*

// one bit per square (6 * 5 = 30)
private typealias Bits = Int

private fun Point.toBitsIndex(): Int = x + y * GAME_WIDTH
private fun Int.toPoint(): Point = Point(x = this % GAME_WIDTH, y = this / GAME_WIDTH)

private inline fun Bits.forEachSet(f : (Point) -> Unit) : Unit {
	var i = this
	while (i != 0) {
		val pos = i.countTrailingZeroBits()
		f(pos.toPoint())
		i = i xor (1 shl pos)
	}
}

class BitState(
	override var playersTurn: Player,
	override var lastPushed: Point?,
	private var stateBlue : Bits,
	private var stateRed : Bits,
) : State {

	override var victor: Player? = null

	private val history = ArrayDeque<BitState>()

	companion object {
		fun fromState(state: State) = when(state) {
			is BitState -> state
			is MutableState -> BitState(
				playersTurn = state.playersTurn,
				lastPushed = state.lastPushed,
				stateBlue = createBitsFor(state.grid, Player.Blue),
				stateRed = createBitsFor(state.grid, Player.Red)
			)
			else -> TODO()
		}

		private fun createBitsFor(grid: GameGrid, player: Player): Bits {
			var bits = 0
			grid.onEach { point, p ->
				if (p == player) {
					bits = bits or (1 shl point.toBitsIndex())
				}
			}
			return bits
		}
	}

	override fun tokenAt(p: Point): Player? =
		if (stateBlue and (1 shl p.toBitsIndex()) != 0) Player.Blue
		else if (stateRed and (1 shl p.toBitsIndex()) != 0) Player.Red
		else null

	override fun isEligibleToMove(from: Point): Boolean {
		TODO("Not yet implemented")
	}

	private var currentPossibleMoves : List<Move>? = null
	override val possibleMoves: List<Move>
		get() = currentPossibleMoves ?: run {
				val moves = mutableListOf<Move>()
				val state = when (playersTurn) {
					Player.Blue -> stateBlue
					Player.Red -> stateRed
				}
				state.forEachSet { p ->
					if (lastPushed != p) {
						p.left().takeIf { findMoveError(it) == null }?.let { moves.add(it) }
						p.right().takeIf { findMoveError(it) == null }?.let { moves.add(it) }
						p.up().takeIf { findMoveError(it) == null }?.let { moves.add(it) }
						p.down().takeIf { findMoveError(it) == null }?.let { moves.add(it) }
					}
				}
				moves
			}

	override fun longHashCode(): Long {
		val stateHash = (stateBlue.toLong() shl 30) or stateRed.toLong()
		//TODO add last pushed
		return (stateHash shl 4) or  (playersTurn.ordinal and 0b1111).toLong()
	}

	override fun onEach(f: (Point, Player) -> Unit) {
		stateBlue.forEachSet { f(it, Player.Blue) }
		stateRed.forEachSet { f(it, Player.Red) }
	}

	override fun deepCopy(): BitState = BitState(
		playersTurn = playersTurn,
		lastPushed = lastPushed,
		stateBlue = stateBlue,
		stateRed = stateRed
	)

	override fun move(move: Move): MoveResult {
		history.addLast(deepCopy())

		val toIndex = move.to.toBitsIndex()
		val fromIndex = move.from.toBitsIndex()


		// push (assume the move is valid)
		//TODO optimize
		nextOver(move.from, move.to).takeIf {
			it.isInBounds()
		}?.let {
			val i = it.toBitsIndex()
			val hasRed = 1 and (stateRed shr toIndex)
			stateRed = stateRed or (hasRed shl i)
			val hasBlue = 1 and (stateBlue shr toIndex)
			stateBlue = stateBlue or (hasBlue shl i)
			if (hasRed == 1 && playersTurn == Player.Blue || hasBlue == 1 && playersTurn == Player.Red) {
				// pushed by the other player, so disable
				lastPushed = it
			}
		}

		// remove any player from "from" and "to" (to in case we pushed something)
		stateRed = stateRed and ((1 shl toIndex).inv())
		stateBlue = stateBlue and ((1 shl toIndex).inv())
		stateRed = stateRed and ((1 shl fromIndex).inv())
		stateBlue = stateBlue and ((1 shl fromIndex).inv())

		when (playersTurn) {
			Player.Red -> {
				// move
				stateRed = stateRed or (1 shl toIndex)
				playersTurn = Player.Blue
			}
			Player.Blue -> {
				// move
				stateBlue = stateBlue or (1 shl toIndex)
				playersTurn = Player.Red
			}
		}

		this.currentPossibleMoves = null
		return MoveResult.Success
	}

	override fun undo() {
		val prev = history.removeLast()
		this.playersTurn = prev.playersTurn
		this.lastPushed = prev.lastPushed
		this.stateBlue = prev.stateBlue
		this.stateRed = prev.stateRed
		this.currentPossibleMoves = null
	}

	override fun canUndo(): Boolean = history.isNotEmpty()

	override fun renderText(): String {
		val grid = GameGrid.create { x, y ->
			tokenAt(Point(x, y))
		}
		return grid.renderText()
	}
}
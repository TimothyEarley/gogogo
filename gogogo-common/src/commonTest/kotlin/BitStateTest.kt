import de.earley.gogogo.game.BitState
import de.earley.gogogo.game.Move
import de.earley.gogogo.game.State
import de.earley.gogogo.game.withMove
import io.kotest.assertions.asClue
import io.kotest.assertions.withClue
import io.kotest.core.spec.style.StringSpec
import io.kotest.matchers.collections.shouldContainExactlyInAnyOrder

class BitStateTest : StringSpec({
	"behaves same as mutable state" {
		State.initial().testMovesToDepth(BitState.fromState(State.initial()), emptyList(), 6)
	}
})

private fun State.testMovesToDepth(bitState: BitState, moves: List<Move>, depth: Int) {
	withClue("Players Turn: $playersTurn, moves: $moves") {
		this.renderText().asClue {
			bitState.renderText().asClue {
				withClue("Missing: ${possibleMoves - bitState.possibleMoves}, Extra: ${bitState.possibleMoves - possibleMoves}") {
					bitState.possibleMoves shouldContainExactlyInAnyOrder possibleMoves
				}
			}
		}
	}
	if (depth == 0) return
	for (move in possibleMoves) {
		withMove(move) {
			bitState.move(move)
			testMovesToDepth(bitState, moves + move, depth - 1)
			bitState.undo()
		}
	}
}

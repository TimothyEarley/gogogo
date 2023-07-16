import de.earley.gogogo.game.State
import de.earley.gogogo.game.withMove
import io.kotest.core.spec.style.StringSpec


class TestPossibleMoves : StringSpec({
    "testAllPossibleMovesArePossible" {
        State.initial().testMovesToDepth(5)
    }
})

private fun State.testMovesToDepth(depth: Int) {
    if (depth == 0) return
    for (move in possibleMoves) {
        withMove(move) {
            testMovesToDepth(depth - 1)
        }
    }
}
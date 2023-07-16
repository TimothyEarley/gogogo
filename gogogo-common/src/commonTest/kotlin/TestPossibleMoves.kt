import de.earley.gogogo.game.State
import de.earley.gogogo.game.withMove
import kotlin.test.Test


class TestPossibleMoves {

    @Test fun testAllPossibleMovesArePossible() {
        State.initial().testMovesToDepth(5)
    }

    private fun State.testMovesToDepth(depth: Int) {
        if (depth == 0) return
        for (move in possibleMoves) {
            withMove(move) {
                testMovesToDepth(depth - 1)
            }
        }
    }
}
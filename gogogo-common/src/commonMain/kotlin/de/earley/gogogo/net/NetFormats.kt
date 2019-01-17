package de.earley.gogogo.game

import kotlinx.serialization.json.JSON


fun State.toNetFormat(): String = JSON.stringify(State.serializer(), this)
fun String.stateFromNetFormat(): State = JSON.parse(State.serializer(), this)


fun Move.toNetFormat(): String = JSON.stringify(Move.serializer(), this)
fun String.moveFromNetFormat(): Move = JSON.parse(Move.serializer(), this)

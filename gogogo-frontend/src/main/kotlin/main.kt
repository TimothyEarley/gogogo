package de.earley.gogogo


import de.earley.gogogo.ui.GameUI
import org.w3c.dom.HTMLDivElement
import kotlin.browser.document
import kotlin.browser.window

fun main(args: Array<String>) {
	println("Hello world!")

	window.onload = {
		val root = document.getElementById("game") as HTMLDivElement
		GameUI(root)
	}
}
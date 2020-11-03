package de.earley.gogogo


import de.earley.gogogo.ui.MenuUI
import kotlinx.browser.window

fun main() {
	Log.debug { "Started main" }
	window.onload = {
		MenuUI()
	}
}
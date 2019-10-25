package de.earley.gogogo.ui

import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLTableElement
import kotlin.browser.document

class MenuUI {

	private val enableTestAI = false

	private val btnPlayLocal: HTMLButtonElement = document.get("btn-play-local")
	private val btnPlayOnline: HTMLButtonElement = document.get("btn-play-online")
	private val btnRules: HTMLButtonElement = document.get("btn-rules")
	private val btnTestAI: HTMLButtonElement = document.get("btn-test-ai")
	private val btnBack: HTMLButtonElement = document.get("btn-back")
	private val menu: HTMLDivElement = document.get("main-menu")

	private val rules: HTMLDivElement = document.get("rules")
	private val game: HTMLDivElement = document.get("game-ui")
	private val aiTest: HTMLDivElement = document.get("ai-test-ui")

	private val gameGrid: HTMLTableElement = document.get("game-grid")

	init {

		game.hide()
		rules.hide()

		btnPlayLocal.onClick {
			menu.hide()
			game.unhide()
			GameUI.open(gameGrid, this, GameMode.Local)
		}

		btnPlayOnline.onClick {
			menu.hide()
			game.unhide()
			GameUI.open(gameGrid, this, GameMode.Online)
		}

		btnRules.onClick {
			rules.unhide()
			menu.hide()
		}

		if (!enableTestAI) btnTestAI.hide()
		btnTestAI.onClick {
			menu.hide()
			aiTest.unhide()
			//TODO opening and closing is broken
			AiTestUI(this)
		}

		btnBack.onClick {
			rules.hide()
			menu.unhide()
		}

	}


	fun closeGame() {
		game.hide()
		menu.unhide()
	}

	fun closeAiTest() {
		aiTest.hide()
		menu.unhide()
	}


}
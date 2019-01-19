package de.earley.gogogo.ui

import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import kotlin.browser.document

class MenuUI {
	private val btnPlayLocal: HTMLButtonElement = document.get("btn-play-local")


	private val btnPlayOnline: HTMLButtonElement = document.get("btn-play-online")
	private val btnRules: HTMLButtonElement = document.get("btn-rules")
	private val btnBack: HTMLButtonElement = document.get("btn-back")
	private val menu: HTMLDivElement = document.get("main-menu")

	private val rules: HTMLDivElement = document.get("rules")
	private val game: HTMLDivElement = document.get("game-ui")

	init {
		btnPlayLocal.onClick {
			menu.hidden = true
			game.hidden = false
			GameUI.open(document.get("game"), this, GameMode.Local)
		}

		btnPlayOnline.onClick {
			menu.hidden = true
			game.hidden = false
			GameUI.open(document.get("game"), this, GameMode.Online)
		}

		btnRules.onClick {
			rules.hidden = false
			menu.hidden = true
		}

		btnBack.onClick {
			rules.hidden = true
			menu.hidden = false
		}

	}


	fun closeGame() {
		game.hidden = true
		menu.hidden = false
	}


}
import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar

plugins {
	kotlin("jvm") version Versions.kotlin
	id("com.github.johnrengelman.shadow") version Versions.shadow
	application
}

dependencies {

	compile(Depends.Ktor.netty)
	compile(Depends.Ktor.websockets)
	compile(Depends.logback)
	
	compile(project(":gogogo-common"))
}

application {
	mainClassName = "de.earley.gogogo.backend.MainKt"
}

tasks {
	withType<ShadowJar> {
		baseName = "gogogo-backend"
		classifier = ""
		version = ""
	}
}
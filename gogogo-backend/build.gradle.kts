import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar

plugins {
	kotlin("jvm")
	id("com.github.johnrengelman.shadow") version Versions.shadow
	application
}

dependencies {

	implementation(Depends.Ktor.netty)
	implementation(Depends.Ktor.websockets)
	implementation(Depends.logback)

	implementation(project(":gogogo-common"))
}

application {
	@Suppress("DEPRECATION") // needed by shadow
	mainClassName = "de.earley.gogogo.backend.MainKt"
}

tasks {
	withType<ShadowJar> {
		archiveBaseName.set("gogogo-backend")
		archiveClassifier.set("")
		archiveVersion.set("")
	}
}
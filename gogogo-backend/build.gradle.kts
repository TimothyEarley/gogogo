import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar

plugins {
	kotlin("jvm")
	id("com.github.johnrengelman.shadow")
	application
}

dependencies {

	implementation(Ktor.Server.netty)
	implementation(Ktor.server.websockets)
	implementation("ch.qos.logback:logback-classic:_")

	implementation(project(":gogogo-common"))
}

application {
	mainClass = "de.earley.gogogo.backend.MainKt"
}

tasks {
	withType<ShadowJar> {
		archiveBaseName.set("gogogo-backend")
		archiveClassifier.set("")
		archiveVersion.set("")
	}
}
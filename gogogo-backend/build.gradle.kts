import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar

plugins {
	kotlin("jvm")
	id("com.github.johnrengelman.shadow")
	application
}

dependencies {

	implementation(Ktor.Server.netty)
	implementation("io.ktor:ktor-websockets:_")
	implementation("ch.qos.logback:logback-classic:_")

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
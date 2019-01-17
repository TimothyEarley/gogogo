import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar

plugins {
	kotlin("jvm") version "1.3.10"
	id("com.github.johnrengelman.shadow") version "4.0.3"
	application
}

val ktor_version = "1.1.1"

dependencies {

	compile("io.ktor:ktor-server-netty:$ktor_version")
	compile("io.ktor:ktor-websockets:$ktor_version")
	compile("ch.qos.logback:logback-classic:1.2.3")
	
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

	val stage by registering {
		dependsOn("clean", "shadowJar")
	}

}
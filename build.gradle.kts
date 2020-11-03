plugins {
	id("com.github.ben-manes.versions") version "0.34.0"
	kotlin("jvm") version Versions.kotlin apply false
}

allprojects {
	group = "de.earley.gogogo"
	version = "0.1.2"

	repositories {
		jcenter()
		maven("https://kotlin.bintray.com/kotlinx")
	}
}

tasks {
	// for heroku
	val stage by registering {
		dependsOn(":gogogo-backend:clean", ":gogogo-backend:shadowJar")
	}
}
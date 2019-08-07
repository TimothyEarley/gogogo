plugins {
	id("com.github.ben-manes.versions") version "0.22.0"
}

allprojects {
	group = "de.earley.gogogo"
	version = "0.1.1"

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
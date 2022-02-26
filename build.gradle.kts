plugins {
	kotlin("jvm") apply false
}

allprojects {
	group = "de.earley.gogogo"
	version = "0.2.0"

	repositories {
		mavenCentral()
	}
}

tasks {
	// for heroku
	val stage by registering {
		dependsOn(":gogogo-backend:clean", ":gogogo-backend:shadowJar")
	}
}
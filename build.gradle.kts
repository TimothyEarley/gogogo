allprojects {
	group = "de.earley.gogogo"
	version = "0.1.1"

	repositories {
		jcenter()
		maven("https://kotlin.bintray.com/kotlinx")
	}
}

tasks {
	val stage by registering {
		dependsOn(":gogogo-backend:clean", ":gogogo-backend:shadowJar")
	}
}
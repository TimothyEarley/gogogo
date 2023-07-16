plugins {
	kotlin("multiplatform")
}

kotlin {

	jvm()
	js(IR).browser {

	}

	sourceSets {
		commonMain {
			dependencies {
				implementation(KotlinX.coroutines.core)
			}
		}

		commonTest {
			dependencies {
				implementation("io.kotest:kotest-framework-engine:_")
				implementation(Testing.Kotest.assertions.core)
			}
		}

		val jvmTest by getting {
			dependencies {
				implementation(Testing.Kotest.runner.junit5)
			}
		}

		all {
			languageSettings.optIn("kotlin.RequiresOptIn")
		}
	}
}

tasks.withType<Test>().configureEach {
	useJUnitPlatform()
}
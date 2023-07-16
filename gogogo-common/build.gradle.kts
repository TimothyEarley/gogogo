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
				implementation("io.github.reactivecircus.cache4k:cache4k:_")
			}
		}

		commonTest {
			dependencies {
				implementation(Kotlin.test)
			}
		}

		all {
			languageSettings.optIn("kotlin.RequiresOptIn")
		}
	}
}
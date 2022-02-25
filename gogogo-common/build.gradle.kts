plugins {
	kotlin("multiplatform")
}

kotlin {

	jvm()
	js().browser {

	}

	sourceSets {
		commonMain {
			dependencies {
				implementation(KotlinX.coroutines.core)
				implementation("io.github.reactivecircus.cache4k:cache4k:_")
			}
		}

		all {
			languageSettings.optIn("kotlin.RequiresOptIn")
		}
	}
}
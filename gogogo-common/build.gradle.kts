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
			}
		}

		all {
			languageSettings.optIn("kotlin.RequiresOptIn")
		}
	}
}
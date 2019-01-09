import org.jetbrains.kotlin.gradle.tasks.Kotlin2JsCompile

plugins {
    id("kotlin2js") version "1.3.10"
}

group = "de.earley"
version = "0.1"

repositories {
    jcenter()
}

dependencies {
    compile(kotlin("stdlib-js", "1.3.11"))
    compile("org.jetbrains.kotlinx:kotlinx-coroutines-core-js:1.1.0")
    compile("org.jetbrains.kotlinx:kotlinx-html-js:0.6.12")
}


tasks {

    compileKotlin2Js {
        kotlinOptions {
            sourceMap = true
        }
    }

    val assembleWeb by registering(Sync::class) {

        group = "build"
        description = "Assemble the web application"
        includeEmptyDirs = false

        // kotlin std lib
        configurations.compile.get().forEach { file ->
            from(zipTree(file.absolutePath)) {
                include { fte ->
                    val path = fte.path
                    path.endsWith(".js") && (
                            path.startsWith("META-INF/resources/") || !path.startsWith("META-INF/")
                    )
                }
            }
        }

        from(sourceSets["main"].output) {
            exclude("**/*.kjsm")
        }

        into("web")

    }

    assemble {
        dependsOn(assembleWeb)
    }

}
import org.apache.tools.ant.taskdefs.optional.depend.Depend
import org.apache.tools.ant.types.optional.depend.DependScanner
import org.jetbrains.kotlin.gradle.tasks.Kotlin2JsCompile

plugins {
    id("kotlin2js") version Versions.kotlin
}

apply {
    plugin("kotlin-dce-js") // already in kotlin-gradle-plugin, hence the apply
}

dependencies {
    compile(project(":gogogo-common"))

    compile(Depends.JS.kotlin)
    compile(Depends.JS.coroutines)
    compile(Depends.JS.html)
    // indirect dependency, but otherwise not picked up by dce
    compile(Depends.JS.serialisation)
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

        dependsOn("runDceKotlinJs")

        // get resources
        from(sourceSets["main"].resources)

        // use the minified version
        from(File("${project.buildDir}/kotlin-js-min/main"))

        into("${rootProject.rootDir}/web")

    }

    assemble {
        dependsOn(assembleWeb)
    }

}
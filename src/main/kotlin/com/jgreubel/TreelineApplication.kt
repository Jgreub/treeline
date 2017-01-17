package com.jgreubel

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
open class TreelineApplication

fun main(args: Array<String>) {
    val app = SpringApplication.run(TreelineApplication::class.java, *args)
    println("local server port: " + app.environment.getProperty("local.server.port"))
    println("server port" + app.environment.getProperty("server.port"))
}

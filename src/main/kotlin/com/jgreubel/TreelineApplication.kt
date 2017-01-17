package com.jgreubel

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
open class TreelineApplication

fun main(args: Array<String>) {
    SpringApplication.run(TreelineApplication::class.java, *args)
}

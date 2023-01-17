package com.helia.sample

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.properties.ConfigurationPropertiesScan
import org.springframework.boot.runApplication

@SpringBootApplication
@ConfigurationPropertiesScan
class SampleApplication

fun main(args: Array<String>) {
	runApplication<SampleApplication>(*args)
}

package com.jgreubel.test_support

import com.jgreubel.domain.entities.Event
import com.jgreubel.rest.repositories.EventRestRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Profile
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

@Profile("test")
@RestController
open class TestEndpoints @Autowired constructor(val eventRestRepository: EventRestRepository) {

    @RequestMapping("/test/resetTestDB", method = arrayOf(RequestMethod.POST))
    fun resetTestDB() {
        removeAllDataFromDB()
        insertDefaultTestSeedData()
    }

    private fun removeAllDataFromDB() {
        eventRestRepository.deleteAll()
    }

    private fun insertDefaultTestSeedData() {
        val events = listOf(
            Event(1, "Earth has been born"),
            Event(2, "Cheese is invented"),
            Event(3, "All humans have died")
        )

        eventRestRepository.save(events)
    }
}
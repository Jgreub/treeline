package com.jgreubel.testsupport

import com.jgreubel.events.Event
import com.jgreubel.events.EventRestRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Profile
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController
import java.time.LocalDateTime

@Profile("test")
@RestController
open class TestEndpoints @Autowired constructor(val eventRestRepository: EventRestRepository) {

    @PostMapping("/test/resetTestDB")
    fun resetTestDB() {
        removeAllDataFromDB()
        insertTestSeedData()
    }

    private fun removeAllDataFromDB() {
        eventRestRepository.deleteAll()
    }

    private fun insertTestSeedData() {
        val events = listOf(
            Event(1, "Earth has been born", LocalDateTime.of(2015, 1, 2, 13, 46)),
            Event(2, "Cheese is invented", LocalDateTime.of(2015, 5, 5, 11, 14)),
            Event(3, "All humans have died", LocalDateTime.of(2016, 9, 1, 14, 37))
        )

        eventRestRepository.save(events)
    }
}

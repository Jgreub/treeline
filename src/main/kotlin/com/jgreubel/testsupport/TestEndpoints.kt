package com.jgreubel.testsupport

import com.jgreubel.events.Event
import com.jgreubel.events.EventRestRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Profile
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController
import java.time.LocalDateTime

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
            Event(1, "Earth has been born", LocalDateTime.of(2015, 1, 2, 13, 46)),
            Event(2, "Cheese is invented", LocalDateTime.of(2015, 5, 5, 11, 14)),
            Event(3, "All humans have died", LocalDateTime.of(2016, 9, 1, 14, 37))
        )

        eventRestRepository.save(events)
    }
}

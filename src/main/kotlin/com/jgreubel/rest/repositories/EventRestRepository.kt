package com.jgreubel.rest.repositories

import com.jgreubel.domain.entities.Event
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(path = "events", collectionResourceRel = "events")
interface EventRestRepository : PagingAndSortingRepository<Event, Long>

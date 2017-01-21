package com.jgreubel.events

import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(path = "events", collectionResourceRel = "events")
interface EventRestRepository : PagingAndSortingRepository<Event, Long>

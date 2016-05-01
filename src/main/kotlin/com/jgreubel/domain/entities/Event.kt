package com.jgreubel.domain.entities

import javax.persistence.*

@Entity
data class Event(
    @Id
    @SequenceGenerator(name = "event_id_seq", sequenceName = "event_id_seq")
    @GeneratedValue(generator = "event_id_seq", strategy = GenerationType.SEQUENCE)
    val id: Long = 0,
    var description: String = ""
)

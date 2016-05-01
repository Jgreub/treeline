CREATE SEQUENCE event_id_seq;

CREATE TABLE event (
    id bigint PRIMARY KEY DEFAULT nextval('event_id_seq'),
    description TEXT
);

-- Make sure sequence is dropped if 'event' table is dropped
ALTER SEQUENCE event_id_seq OWNED BY event.id;

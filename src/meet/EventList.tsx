import React, { Fragment } from 'react'
import { Event } from '../services/event-models';

interface EventListProps {
  events: Event[];
}

const EventList = (props: EventListProps) => {
  return (
    <Fragment>
      {
        props.events.map(event => 
          <h3>{event.distance}M {event.eventType} {event.gender}</h3>)
      }
    </Fragment>
  )
}

export default EventList

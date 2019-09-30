import React, { Fragment } from "react";
import { EventModel } from "../../models/event-models";

interface EventListProps {
  events: EventModel[];
}

const EventList = (props: EventListProps) => {
  return (
    <Fragment>
      {props.events.map(event => (
        <h3>
          {event.distance}M {event.eventType} {event.gender}
        </h3>
      ))}
    </Fragment>
  );    
};

export default EventList;

import React, { useState, useEffect } from "react";
import { MeetModel } from "../../models/event-models";
import styles from "./Meet.module.scss";
import EventList from "../event/EventList";
import { getMeet } from "../../services/event-service";

interface MeetProps {
  meet: MeetModel;
}
const Meet = (props: MeetProps) => {
  return (
    <div className={styles.header_container}>
      <h2>{props.meet.name}</h2>
      <EventList events={props.meet.events} />
    </div>
  );
};

export default Meet;

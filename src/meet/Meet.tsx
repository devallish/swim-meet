import React, { useState, useEffect } from 'react'
import { Meet } from "../services/event-models"
import styles from './Meet.module.scss'
import EventList from "./EventList"
import { getMeet } from "../services/event-service"

interface MeetProps {
  meet: Meet;
}
const Meet = (props: MeetProps) => {

  const[currentMeet, setCurrentMeet] = useState<Meet | undefined>(undefined);
  
  useEffect(() =>{
    const sampleMeet = getMeet("");
    setCurrentMeet(sampleMeet);
  }, [])

  return (
    <div className={styles.header_container}>
      <h2>{props.meet.name}</h2>
      <EventList events={props.meet.events} />
    </div>
  )
}

export default Meet

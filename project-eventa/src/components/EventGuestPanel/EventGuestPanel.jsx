import React, { useEffect } from "react";
import { useParams } from "react-router-dom"
import GuestsList from "../GuestsList/GuestsList";
import EventData from "../EventData/EventData";
import useFirebase from "../../hooks/useFirebase";


const EventGuestPanel = () => {  

  const {id} = useParams();  
  const { getEvent, event } = useFirebase();      
  const { eName, eAdress, eDate, eTime, eInfo } = event

  useEffect(() => {
    getEvent(id)
    console.log(event)
    return () => {        
    }
  }, event)
  

  return (
    <>
      {event && <EventData
      eName={eName}
      eAdress={eAdress}
      eDate={eDate}
      eTime={eTime}
      eInfo={eInfo}      
      />}
      <GuestsList/>      
    </>
  );
};

export default EventGuestPanel;

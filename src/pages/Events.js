import React, { useState } from "react";
import eventsData from "../data/eventsData.js";
import { Link } from "react-router-dom";
// import CreateEvent from "/CreateEvent.js"

export default function Events() {
  const [allEvents, setAllEvents] = useState(eventsData);

  return (
    <>
      <h1>Timeline</h1>
      <ul>
        {allEvents.data.events.map((event, index) => (
          <li key={index} className={"accentA"}>
            <Link className="link" to={`/Events/${index}`}>
            <div className="date">{event.startDate}</div>
            </Link>
            <div className="title">{event.title}</div>
            <img
              src={event.url}
              className="event--image"
              alt={event.title}
              width="100px"
              height="100px"
            />
            <div className="descr">{event.description}</div>
            
            
          </li>
        ))}
      </ul>
    </>
  );
}

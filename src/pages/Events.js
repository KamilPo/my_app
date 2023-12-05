import React, { useState } from "react";
import eventsData from "../data/eventsData.js";
import { Link } from "react-router-dom";

export default function Events() {
  const [allEvents, setAllEvents] = useState(eventsData.data.events);
  const sortedEvents = allEvents.sort(eventComparator)

  function eventComparator(a, b) {
    if (a.startDate > b.startDate) {
      return 1
    } else if (a.startDate < b.startDate) {
      return -1
    }
    return 0
  }

  return (
    <>
      <h1>Timeline</h1>
      <ul>
        {sortedEvents.map((event, index) => (
          <li key={index} className={"accentA"}>
            <Link className="link" to={`/Events/${index}`}>
              <div className="date">{event.startDate}</div>
            </Link>
            <div className="title">{event.title}</div>
            <div className="events--image-container">
              <img
                src={event.url}
                className="events--image"
                alt={event.title}
                width="100px"
                height="100px"
              />
            </div>
            <div className="descr">{event.description}</div>


          </li>
        ))}
      </ul>
    </>
  );
}

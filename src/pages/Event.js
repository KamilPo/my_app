import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import eventsData from "../data/eventsData.js";

export default function Event() {

  const { id } = useParams();
  const event = eventsData.data.events[id];
  const navigate = useNavigate();

  if (!event) {
    return <div>Nie znaleziono wydarzenia</div>;
  }


  const handleDelete = () => {
    const updatedEvents = [...eventsData.data.events];
    updatedEvents.splice(id, 1);

    eventsData.data.events = updatedEvents;
    navigate('/events');
  };

  return (
    <>
      <div className="event-container">
        <h1>Event details</h1>
        <div className="event">
          <div className="event--title">
            {event.title}
          </div>
          <div className="event--strong">
            <text>Start date:</text> {event.startDate}
          </div>
          <div >
            <img src={event.url} alt={event.title} className="event--img" />
          </div>
          <div className="event--strong">
            <text >Description:</text> {event.description}
          </div>
          <button className="event--deletebutton" onClick={handleDelete}>Delete</button>
          <Link to="/events">Back</Link>
        </div>
      </div>
    </>
  );
};

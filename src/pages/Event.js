import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import eventsData from "../data/eventsData.js";

export default function Event(){

    const { id } = useParams();
    const event = eventsData.data.events[id];
    const navigate = useNavigate();

    if (!event) {
        return <div>Nie znaleziono wydarzenia</div>;
    }


    const handleDelete = () => {
      // Tutaj umieść logikę usuwania wydarzenia
      // W tym przykładzie, usuwamy zdarzenie o określonym indeksie z kopii danych
      const updatedEvents = [...eventsData.data.events];
      updatedEvents.splice(id, 1);
  
      // Zaktualizuj dane
      eventsData.data.events = updatedEvents;
  
      // Przekieruj do /events po usunięciu
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
          </div>
        </div>
        </>
      );
    };

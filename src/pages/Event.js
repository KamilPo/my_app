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
        <div>
          <h1>Szczegóły wydarzenia</h1>
          <div>
            <strong>Data:</strong> {event.startDate}
          </div>
          <div>
            <strong>Tytuł:</strong> {event.title}
          </div>
          <div>
            <strong>Opis:</strong> {event.description}
          </div>
          <div>
            <strong>Zdjęcie:</strong>{" "}
            <img src={event.url} alt={event.title} width="100px" height="100px" />
          </div>
          <button onClick={handleDelete}>Usuń</button>
        </div>
      );
    };

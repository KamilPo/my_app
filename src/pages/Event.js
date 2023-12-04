import React from "react";
import { useParams } from "react-router-dom";
import eventsData from "../data/eventsData.js";
import DeleteButton from "../components/DeleteButton.js";

export default function Event(){

    const { id } = useParams();
    const event = eventsData.data.events[id];

    if (!event) {
        return <div>Nie znaleziono wydarzenia</div>;
    }


    // const handleDelete = () => {
    //     // Wywołujemy funkcję usuwającą z komponentu nadrzędnego
    //     onDelete(event.id);
    //     History.push("/events");
    //   };

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
          {/* <DeleteButton key={event.id} event={event} onClick={handleDeleteEvent}/> */}
        </div>
      );
    };

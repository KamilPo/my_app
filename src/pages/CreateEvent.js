import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import eventsData from "../data/eventsData";

export default function CreateEvent() {
    const [newEvent, setNewEvent] = useState({
      title: "",
      startDate: "",
      endDate: "",
      description: "",
      url: "",
})

    const navigate = useNavigate();
    const newEventIndex = eventsData.data.events.length - 1;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEvent((prevEvent) => ({
        ...prevEvent,
        id: newEventIndex,
        [name]: value,
        }));
    };

    console.log(newEvent)

    const handleSubmit = (e) => {e.preventDefault();

    // Dodaj nowe wydarzenie do danych
    eventsData.data.events.push(newEvent);

    // Przekieruj do widoku szczegółów nowego wydarzenia
    
    navigate('/events')
  };

  return (
    <div>
      <h1>Utwórz nowe wydarzenie</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Tytuł:
          <input
            type="text"
            name="title"
            value={newEvent.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Data rozpoczęcia:
          <input
            type="text"
            name="startDate"
            value={newEvent.startDate}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Data zakończenia:
          <input
            type="text"
            name="endDate"
            value={newEvent.endDate}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Opis:
          <textarea
            name="description"
            value={newEvent.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          URL zdjęcia:
          <input
            type="text"
            name="url"
            value={newEvent.url}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Utwórz wydarzenie</button>
      </form>
    </div>
  );
}
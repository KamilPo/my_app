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
    <div className="form-container">
      <h1>Create new event</h1>
      <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="form--input"
            value={newEvent.title}
            onChange={handleChange}
          />
        {/* <br /> */}
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            placeholder="Start Date"
            className="form--input"
            value={newEvent.startDate}
            onChange={handleChange}
          />
        </label>
        {/* <br /> */}
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            placeholder="End Date"
            className="form--input"
            value={newEvent.endDate}
            onChange={handleChange}
          />
        </label>
          <textarea
            name="description"
            placeholder="Description"
            className="form--input"
            value={newEvent.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="url"
            placeholder="url do zdjęcia"
            className="form--input"
            value={newEvent.url}
            onChange={handleChange}
          />
        <button className="form--submit" type="submit">Create Event</button>
      </form>
    </div>
  );
}
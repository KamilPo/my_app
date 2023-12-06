import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateEvent(props) {
  const [newEvent, setNewEvent] = useState({
    title: "",
    startDate: "",
    endDate: "",
    description: "",
    url: "",
    categoryId: 1
  })

  const navigate = useNavigate();
  const evenstIds = props.events.map(event => event.id)
  const newEventIndex = Math.max(...evenstIds) + 1
  console.log(newEventIndex)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      id: newEventIndex,
      [name]: value,
    }));
  };

  console.log(newEvent)

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dodaj nowe wydarzenie do danych
    // props.events.push(newEvent);
    console.log(
      {
        "id": newEventIndex,
        "title": newEvent.title,
        "startDate": newEvent.startDate,
        "endDate": newEvent.endDate,
        "description": newEvent.description,
        "url": newEvent.url,
        "categoryId": newEvent.categoryId,
      }
    )
    props.setEvents(prevState => {
      return [
        ...props.events,
        {
          "id": newEventIndex,
          "title": newEvent.title,
          "startDate": newEvent.startDate,
          "endDate": newEvent.endDate,
          "description": newEvent.description,
          "url": newEvent.url,
          "categoryId": newEvent.categoryId,
        }
      ]
    }
    )
    navigate('/events')
  };

  const allCategoriesSelect = props.categories.map(category =>
    <option value={category.id} key={category.id}>
      {category.name}
      
    </option>
    
    )

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
        <label className="form--label">
          Start Date
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
        <label className="form--label">
          End Date
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
        <select 
                value={newEvent.categoryId}
                className="form--select"
                onChange={handleChange}
                name="categoryId"
            >
                {allCategoriesSelect}
            </select>
        <button className="form--submit" type="submit">Create Event</button>
      </form>
    </div>
  );
}

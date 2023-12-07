import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function Event(props) {
  const { id } = useParams();
  const event = props.events.find((event) => event.id == id);
  const navigate = useNavigate();

  if (!event) {
    return <div>Nie znaleziono wydarzenia</div>;
  }

  const handleDelete = () => {
    const updatedEvents = props.events.filter((e) => e.id !== parseInt(id, 10));
    props.setEvents(updatedEvents);
    navigate('/events');
  };

  return (
    <div className="container mt-5">
      <Link to="/events" className="btn btn-primary mb-3">
        Back
      </Link>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{event.title}</h1>
          <p className="card-text">
            <strong>Start date:</strong> {event.startDate}
          </p>
          <img src={event.url} alt={event.title} className="img-fluid mb-3" />
          <p className="card-text">
            <strong>Description:</strong> {event.description}
          </p>
          <div className="d-flex">
            <Link to={`/editEvent/${id}`} className="btn btn-primary me-2">
              Edit
            </Link>
            <button
              className="btn btn-danger"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
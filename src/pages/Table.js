import React from "react";
import { Link } from "react-router-dom";


export default function Table(props) {
  const eventsCards = props.events.map((event) => (
    <tr key={event.id}>
      <th scope="row">{event.id}</th>
      <td>{event.title}</td>
      <td>{event.startDate}</td>
      <td>{event.endDate}</td>
      <td>{event.description}</td>
      <td>{event.categoryId}</td>
    </tr>
  ));

  return (
    <div className="container mt-5">
        <Link to="/events" className="btn btn-primary mb-3">
        Back
      </Link>
      <h1>Events Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Description</th>
            <th scope="col">Category ID</th>
          </tr>
        </thead>
        <tbody>{eventsCards}</tbody>
      </table>
    </div>
  );
}

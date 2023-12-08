import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Table(props) {
    const [sortBy, setSortBy] = useState(""); 
    const [sortOrder, setSortOrder] = useState("asc"); 

    const handleSort = (category) => {
        if (category === sortBy) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortBy(category);
            setSortOrder("asc");
        }
    };

    const [startDate, setStartDate] = React.useState("");
    const [endDate, setEndDate] = React.useState("");

    const handleSortBy = (events, sortBy, sortOrder) => {
        const sortedEvents = [...events];

        sortedEvents.sort((a, b) => {
            const valueA = a[sortBy];
            const valueB = b[sortBy];

            if (typeof valueA === "string" && typeof valueB === "string") {
                return sortOrder === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
            } else {
                return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
            }
        });

        return sortedEvents;
    };

    const events = props.events;
    const filteredEvents = events
        .filter(event => event.startDate > startDate || !startDate)
        .filter(event => event.endDate <= endDate || !endDate);

    const sortedEvents = handleSortBy(filteredEvents, sortBy, sortOrder);

    function handleChangeStartDate(event) {
        event.preventDefault();
        const { value } = event.target;
        setStartDate(value);
    }

    function handleChangeEndDate(event) {
        event.preventDefault();
        const { value } = event.target;
        setEndDate(value);
    }

    const eventsCards = sortedEvents.map((event) => (
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
            <Link to="/" className="btn btn-primary mb-3">
                Back
            </Link>
            <h1>Events Table</h1>
            <div className="mb-3">
                <label className="form-label">Filter Start Date:</label>
                <input
                    type="date"
                    className="form-control"
                    value={startDate}
                    onChange={handleChangeStartDate}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Filter End Date:</label>
                <input
                    type="date"
                    className="form-control"
                    value={endDate}
                    onChange={handleChangeEndDate}
                />
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">
                            <button
                                className="btn btn-link"
                                onClick={() => handleSort("id")}
                                style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}
                            >
                                ID
                            </button>
                        </th>
                        <th scope="col">
                            <button
                                className="btn btn-link"
                                onClick={() => handleSort("title")}
                                style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}
                            >
                                Title
                            </button>
                        </th>
                        <th scope="col">
                            <button
                                className="btn btn-link"
                                onClick={() => handleSort("startDate")}
                                style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}
                            >
                                Start Date
                            </button>
                        </th>
                        <th scope="col">
                            <button
                                className="btn btn-link"
                                onClick={() => handleSort("endDate")}
                                style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}
                            >
                                End Date
                            </button>
                        </th>
                        <th scope="col">
                            <button
                                className="btn btn-link"
                                onClick={() => handleSort("description")}
                                style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}
                            >
                                Description
                            </button>
                        </th>
                        <th scope="col">
                            <button
                                className="btn btn-link"
                                onClick={() => handleSort("categoryId")}
                                style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}
                            >
                                Category ID
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>{eventsCards}</tbody>
            </table>
        </div>
    );
}

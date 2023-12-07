import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateEvent(props) {

	const [newEvent, setNewEvent] = useState({
		title: "",
		startDate: "",
		endDate: "",
		description: "",
		url: "",
		categoryId: ""
	})

	const [validationError, setValidationError] = useState("");

	const navigate = useNavigate();
	const evenstIds = props.events.map(event => event.id)
	const newEventIndex = Math.max(...evenstIds) + 1

	const handleChange = (e) => {
		const { name, value } = e.target;

		if (name === "startDate" && newEvent.endDate && value > newEvent.endDate) {
			setValidationError("Start date cannot be greater than end date");
		} else {
			setValidationError("");
		}

		if (name === "startDate" && newEvent.endDate && value > newEvent.endDate) {
			setNewEvent((prevEvent) => ({
				...prevEvent,
				id: newEventIndex,
				endDate: value,
				[name]: value
			}));
		} else {
			setNewEvent((prevEvent) => ({
				...prevEvent,
				id: newEventIndex,
				[name]: value
			}));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (newEvent.startDate > newEvent.endDate) {
			setValidationError("Start date cannot be greater than end date");
			return;
		}
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
		navigate('/')
	};

	const allCategoriesSelect = props.categories.map(category =>
		<option value={category.id} key={category.id}>
			{category.name}

		</option>

	)

	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-md-6">
					<div className="card">
						<div className="card-body">
							<h1 className="card-title">Create New Event</h1>
							{validationError && (
								<div className="alert alert-danger" role="alert">
									{validationError}
								</div>
							)}
							<form onSubmit={handleSubmit}>
								<div className="mb-3">
									<label htmlFor="title" className="form-label">
										Title
									</label>
									<input
										type="text"
										id="title"
										name="title"
										className="form-control"
										value={newEvent.title}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="startDate" className="form-label">
										Start Date
									</label>
									<input
										type="date"
										id="startDate"
										name="startDate"
										className="form-control"
										value={newEvent.startDate}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="endDate" className="form-label">
										End Date
									</label>
									<input
										type="date"
										id="endDate"
										name="endDate"
										className="form-control"
										value={newEvent.endDate}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="description" className="form-label">
										Description
									</label>
									<textarea
										id="description"
										name="description"
										className="form-control"
										value={newEvent.description}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="url" className="form-label">
										Image URL
									</label>
									<input
										type="text"
										id="url"
										name="url"
										className="form-control"
										value={newEvent.url}
										onChange={handleChange}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="categoryId" className="form-label">
										Category
									</label>
									<select
										id="categoryId"
										name="categoryId"
										className="form-control"
										value={newEvent.categoryId}
										onChange={handleChange}
										required
									>
										<option value="" disabled>
											Select Category
										</option>
										{allCategoriesSelect}
									</select>
								</div>
								<button type="submit" className="btn btn-primary">
									Create Event
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

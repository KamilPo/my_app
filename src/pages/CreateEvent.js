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
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-md-6">
					<div className="card">
						<div className="card-body">
							<h1 className="card-title">Create New Event</h1>
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

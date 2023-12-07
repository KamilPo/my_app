import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditEvent(props) {
	const { id } = useParams();
	const navigate = useNavigate();

	const existingEvent = props.events.find((event) => event.id == id);

	const [newEvent, setNewEvent] = useState({
		title: existingEvent.title,
		startDate: existingEvent.startDate,
		endDate: existingEvent.endDate,
		description: existingEvent.description,
		url: existingEvent.url,
		categoryId: existingEvent.categoryId,
	});

	const [validationError, setValidationError] = useState("");

	if (!existingEvent) {
		return <div>Event not found</div>;
	}


	const handleChange = (e) => {
		const { name, value } = e.target;

		if (name === "startDate" && newEvent.endDate && value > newEvent.endDate) {
			setValidationError("Start date cannot be greater than end date");
		} else {
			setValidationError("");
		}

		setNewEvent((prevEvent) => ({
			...prevEvent,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (newEvent.startDate > newEvent.endDate) {
			setValidationError("Start date cannot be greater than end date");
			return;
		}

		const existingEventIndex = props.events.findIndex(
			(event) => event.id == id
		);

		const updatedEvents = [...props.events];
		updatedEvents[existingEventIndex] = {
			...existingEvent,
			...newEvent,
		};

		props.setEvents(updatedEvents);
		navigate("/");
	};

	const allCategoriesSelect = props.categories.map((category) => (
		<option value={category.id} key={category.id}>
			{category.name}
		</option>
	));

	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-md-6">
					<div className="card">
						<div className="card-body">
							<h1 className="card-title">Edit Event</h1>
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
									Edit Event
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

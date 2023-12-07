import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function Category(props) {
  const { id  } = useParams();
  const category = props.categories.find((category) => category.id == id );
  const [validationError, setValidationError] = useState("");
  const navigate = useNavigate();

  if (!category) {
    return <div>Nie znaleziono wydarzenia</div>;
  }

  const isCategoryUsed = () => {
    // Sprawdź, czy kategoria jest używana w wydarzeniach
    return props.events.some((event) => event.categoryId == category.id);
  };

  const handleDelete = () => {
    if (isCategoryUsed()) {
      setValidationError("Nie można usunąć kategorii, która jest używana w wydarzeniach.");
    } else {
      const updatedCategories = props.categories.filter((e) => e.id !== parseInt(id, 10));
      props.setCategories(updatedCategories);
      navigate("/categories");
    }
  };

  return (
    <div className="container mt-5">
      <Link to="/categories" className="btn btn-primary mb-3">
        Back
      </Link>
      {validationError && (
        <div className="alert alert-danger" role="alert">
          {validationError}
          </div>
      )}
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{category.name}</h1>
          <div className="mb-3">
            <strong>Color:</strong>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: category.color,
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            ></div>
          </div>
          <button
            className="btn btn-danger me-2"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

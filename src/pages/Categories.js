import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Categories(props) {

  const categoryCards = props.categories.map((category, index) => (

    <div class="col-md-4 mb-4" key={index}>
      <div class="card">
      <Link to={"/categories/" + category.id} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div class="card-body">
          <h5 class="card-title">{category.name}</h5>
          <div className="mb-3">
            <text>Color:</text>
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
        </div>
        </Link>
      </div>
      
    </div>
  ))

  return (
    <div class="container mt-5">
      <Link to="/events" className="btn btn-primary mb-3">
        Back
      </Link>
      <div class="row">
        {categoryCards}
      </div>
    </div>
  );
}

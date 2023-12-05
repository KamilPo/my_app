import React, { useState } from "react";
import categoriesData from "../data/categoriesData.js";
import { Link } from "react-router-dom";

export default function Categories(props) {

  const categoryCards = props.categories.map((category, index) => (
    // <article key={index} className={"categories--card"}>
    //     <Link className="link" to={`/Categories/${index}`}>
    //     <div className="card--name">{category.name}</div>
    //     </Link>

    //     <span className="category--color" style={{backgroundColor: category.color}}></span>

    // </article>

    <div class="col-md-4 mb-4" key={index}>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{category.name}</h5>
          <p class="card-text">{ "color: " +  category.color }</p>
        </div>
      </div>
    </div>
  ))

  return (
    <div class="container mt-5">
      <div class="row">
        {categoryCards}
      </div>
    </div>
  );
}

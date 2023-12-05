import React, { useState } from "react";
import categoriesData from "../data/categoriesData.js";
import { Link } from "react-router-dom";

export default function Categories() {
  const [allCategories, setAllCategories] = useState(categoriesData);

  return (
    <>
      <h1>Categories</h1>
      <ul>
        {allCategories.data.categories.map((category, index) => (
          <li key={index} className={"accentA"}>
            <Link className="link" to={`/Categories/${index}`}>
            <div className="date">{category.name}</div>
            </Link>
            <div className="events--image-container">
            <img
              src={category.url}
              className="events--image"
              alt={category.title}
              width="100px"
              height="100px"
            />
            </div>            
          </li>
        ))}
      </ul>
    </>
  );
}

import React, { useState } from "react";
import categoriesData from "../data/categoriesData.js";
import { Link } from "react-router-dom";

export default function Categories(props) {
  return (
    <>
        <h1 className="categories--label">Categories</h1>
            <div className="categories--container">
                {props.categories.map((category, index) => (
                <article key={index} className={"categories--card"}>
                    <Link className="link" to={`/Categories/${index}`}>
                    <div className="card--name">{category.name}</div>
                    </Link>
                    
                    <span className="category--color" style={{backgroundColor: category.color}}></span>
                               
                </article>
                ))}
            </div>
    </>
  );
}

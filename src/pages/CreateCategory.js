import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import categoriesData from "../data/categoriesData";

export default function CreateCategory() {
    const [newCategory, setNewCategory] = useState({
      name: "",
      color: "",
})

    const navigate = useNavigate();
    const newCategoryIndex = categoriesData.data.categories.length - 1;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCategory((prevEvent) => ({
        ...prevEvent,
        id: newCategoryIndex,
        [name]: value,
        }));
    };

    // console.log(newCategory)

    const handleSubmit = (e) => {e.preventDefault();

    // Dodaj nowe wydarzenie do danych
    categoriesData.data.categories.push(newCategory);

    // Przekieruj do widoku szczegółów nowego wydarzenia
    
    navigate('/categories')
  };

  return (
    <div className="form-container">
      <h1>Create new category</h1>
      <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Category name"
            className="form--input"
            value={newCategory.name}
            onChange={handleChange}
          />
        <input
            type={"color"}
            name={"color"}
            value={newCategory.color}
            onChange={handleChange}
            className={"form--color-input"}
        />
        <button className="form--submit" type="submit">Create Category</button>
      </form>
    </div>
  );
}
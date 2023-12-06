import React, { useState } from "react";
import {useNavigate } from "react-router-dom";

export default function CreateCategory(props) {
    const [newCategory, setNewCategory] = useState({
      name: "",
      color: "",
})

    const navigate = useNavigate();
    const categoryIds = props.categories.map(category => category.id)
    const newCategoryIndex = Math.max(...categoryIds) + 1
    console.log(newCategoryIndex)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCategory((prevCategory) => ({
        ...prevCategory,
        id: newCategoryIndex,
        [name]: value,
        }));
    };

    console.log({
          "id": newCategoryIndex,
          "name": newCategory.name,
          "color": newCategory.color,
        })

    const handleSubmit = (e) => {e.preventDefault();

    // Dodaj nowe wydarzenie do danych
    //props.categories.push(newCategory); //do wywalenia

    props.setCategories(prevState =>{
      return [
        ...props.categories,
        {
          "id": newCategoryIndex,
          "name": newCategory.name,
          "color": newCategory.color,
        }

      ]
    })
    
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
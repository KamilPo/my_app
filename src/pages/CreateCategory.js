import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dodaj nowe wydarzenie do danych
    //props.categories.push(newCategory); //do wywalenia

    props.setCategories(prevState => {
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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Create New Category</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Category Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Enter category name"
                    value={newCategory.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="color" className="form-label">
                    Category Color
                  </label>
                  <input
                    type="color"
                    id="color"
                    name="color"
                    className="form-control"
                    style={{ height: "50px", width: "80px" }}
                    value={newCategory.color}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Create Category
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={handleNavToggle}>
          Kamil Podwika
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/"} onClick={handleNavToggle}>
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/CreateEvent"} onClick={handleNavToggle}>
                Create Event
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Categories"} onClick={handleNavToggle}>
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/CreateCategory"} onClick={handleNavToggle}>
                Create Category
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Table"} onClick={handleNavToggle}>
                Table
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

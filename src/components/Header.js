import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/">Kamil Podwika</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link class="nav-link" to={"/"}>Events</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/CreateEvent"}>Create Event</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/Categories"}>Categories</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/CreateCategory"}>Create Category</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/Table"}>Table</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
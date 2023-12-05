import React from "react"
import { Outlet } from "react-router"
import { Link } from "react-router-dom";

export default function Layout() {
    return(
        <div>
            <div class="nav">
                <input type="checkbox" id="nav-check"/>
                <div class="nav-header">
                    <div class="nav-title">
                    Kamil Podwika
                    </div>
                </div>
                <div class="nav-btn">
                    <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>
                
                <div class="nav-links">
                    <Link to={"/createEvent"}>Create Event</Link>
                    <Link to={"/events"}>Events</Link>
                    <a href="/categories">Categories</a>
                    <a href="/createCategory">Create Category</a>
                    <a href="/table">Table</a>
                    {/* <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
                    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a> */}
                </div>
  
            </div>

            <Outlet/>
            <h3>Footer</h3>
        </div>
        
    )
}
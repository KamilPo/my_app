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
                    <Link to={"/CreateEvent"} target="_blank">Create Event</Link>
                    <Link to={`/Events`} target="_blank">Events</Link>
                    <a href="/Categories" target="_blank">Categories</a>
                    <a href="/CreateCategory" target="_blank">Create Category</a>
                    <a href="/Table" target="_blank">Table</a>
                    {/* <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
                    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a> */}
                </div>
  
            </div>

            <Outlet/>
            <h3>Footer</h3>
        </div>
        
    )
}
import React from "react"
import { Outlet } from "react-router"

export default function Layout() {
    return(
        <div>
            <h1>Header</h1>
            <Outlet/>
            <h3>Footer</h3>
        </div>
        
    )
}
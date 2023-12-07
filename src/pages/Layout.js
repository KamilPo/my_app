import React from "react"
import { Outlet } from "react-router"
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Layout() {
    return (
        <>
            <body style={{ backgroundColor: "rgb(230,230,230)" }}>
                <Header />
                <div class="container mt-5">
                    <Outlet />
                </div>
                <br /><br /><br /><br /><br />
                <Footer />
            </body>
        </>
    )
}
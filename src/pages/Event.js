import React from "react"
import {useParams} from "react-router-dom"

export default function Event() {
    const id = useParams()["id"];
    return (
        <h1>EVENT {id}</h1>
    )
}


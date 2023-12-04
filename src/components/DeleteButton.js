import React from "react"

export default function DeleteButton(props){
    
    function handleClick(){
        props.deleteFunction(props.id)
        History.push("/events")
    }

    return (
        <div className="delete-button" onClick={handleClick}>
            Delete
        </div>
    )
}
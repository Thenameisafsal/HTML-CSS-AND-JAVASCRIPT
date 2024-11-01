import React from "react"
// get the input props
function Card(props){
    return (
        <div>
            <h1 className="text-5xl bg-green-500 p-3 rounded">A card using tailwind</h1>
            <h1>{props.name}</h1>
        </div>
    )
}

export default Card;
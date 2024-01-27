import React from "react"

export default function Joke(props) {
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}

            <p>{props.punchline}</p>
            <hr/>
        </div>
    )
}

// <h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>
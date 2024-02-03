import React from "react"

export default function Joke(props) {

    const [isShown, setIsShown] = React.useState(false)

    function toggleShown(){
        console.log(isShown)
        setIsShown(prevShown => !prevShown)
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            /* {isShown && <button onClick={toggleShown}>Hide Punchline</button>} */
            /* {!isShown && <button onClick={toggleShown}>Show Punchline</button>} */
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
            <hr/>
        </div>
    )
}
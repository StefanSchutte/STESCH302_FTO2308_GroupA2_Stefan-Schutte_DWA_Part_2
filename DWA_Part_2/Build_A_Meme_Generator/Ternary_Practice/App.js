import React from "react"

export default function App() {

    const [isGoingOut, setIsGoingOut] = React.useState(true)

    //const isGoingOut = true

    //let answer = isGoingOut ? 'Yes' : 'No';
    // if(isGoingOut === true) {
    //     answer = "Yes"
    // } else {
    //     answer = "No"
    // } <h1>{isGoingOut ? 'Yes' : 'No'}</h1>

    function changeMind() {
        setIsGoingOut(prevState => !prevState)
    }

    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value" onClick={changeMind}>
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}
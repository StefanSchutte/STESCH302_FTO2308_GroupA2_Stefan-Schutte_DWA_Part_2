import React from "react"
import ReactDOM from "react-dom"

function App() {

    const firstName = "Joe"
    const lastName = "Schmoe"

    const date = new Date()
    const hours = date.getHours() % 12

    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    return (
        <h1>Hello {firstName} {lastName}!</h1>,

        <h2>It is currently about {date.getHours() % 12} o clock!</h2>,

        <h3>It is currently about {hours} o clock!</h3>,

        <h4>Good {timeOfDay}</h4>
)
}

ReactDOM.render(<App/>, document.getElementById("root"))
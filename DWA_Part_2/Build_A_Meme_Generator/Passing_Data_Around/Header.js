import React from "react"

export default function Header(props) {

    /**
     * Challenge:
     * Raise state up a level and pass it down to both the
     * Header and Body components through props.
     */
    const [user, setUser] = React.useState("Joe")

    return (
        <header>
            <p>Current user: {props.user}</p>
        </header>
    )
}
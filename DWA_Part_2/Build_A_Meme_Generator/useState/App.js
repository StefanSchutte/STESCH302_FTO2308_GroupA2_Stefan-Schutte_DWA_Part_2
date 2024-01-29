import React from "react"

export default function App() {
    const [isImportant, setIsImportant] = React.useState('Yes')

    function handleClick() {
        setIsImportant('No')
    }

    console.log(isImportant)
        return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{isImportant[0]}</h1>
            </div>
        </div>
    )
}
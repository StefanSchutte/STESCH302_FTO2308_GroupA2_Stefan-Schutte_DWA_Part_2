import React from "react"

export default function App() {

    function handleClick(){
        console.log('i was clickd')
    }

    function mouseOver(){
        console.log('mouse over')
    }

    return (
        <div className="container">
            <img src="https://picsum.photos/640/360" onMouseOver={mouseOver}/>
            <button onClick={handleClick} >Click me</button>
        </div>
    )
}

// .addEventListerner('click', function(){} )
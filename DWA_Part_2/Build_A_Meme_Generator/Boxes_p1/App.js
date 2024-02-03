import React from "react"
import boxes from "./boxes"
import Box from "./Box.js"

export default function App(props) {

    const [squares, setSquares] = React.useState(boxes)
    props.darkMode


    const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }

    function toggle(id) {
        console.log('clicked')
//imparative
        // setSquares(prevSquares => {
        //     const newSquares = [];
        //     for (let i = 0; i < prevSquares.length; i++){
        //        const currentSquare = prevSquares[i]
        //         if (currentSquare.id === id){
        //             const updatedSquares = {
        //                 ...currentSquare,
        //                 on: !currentSquare.on
        //             }
        //             newSquares.push(updatedSquares)
        //         } else {
        //             newSquares.push(currentSquare)
        //         }
        //     }
        //     return newSquares
        // })

        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }

    const squareElements = squares.map(square => (

        <Box
            key={square.id}
            id={square.id}
            on={square.on}
            toggle={toggle}
        />
       // <div style={styles} className='box' key={square.id}></div>
    ))

    return (
        <main>
            {squareElements}
        </main>
    )
}

import React from "react"
import Count from "Count"
export default function App() {

    const [count, setCount ] = React.useState(0)
    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */
    function add(){
        setCount(function(prevCount){
            return prevCount + 1
        })
    }

    function minus() {
        setCount(prevCount => prevCount - 1)

    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={minus}>–</button>
            <Count number={count}/>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}

/*
1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?

a. New value of state (setCount(42))
b. Callback function - whatever the callback function
   returns === new value of state


2. When would you want to pass the first option (from answer
   above) to the state setter function?
Whenever you don't need the previous value of state to determine
what the new value of state should be.


3. When would you want to pass the second option (from answer
   above) to the state setter function?
Whenever you DO need the previous value to determine the new value

 */

import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])

    const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)

    function addItem(){
        const newThingText = `Thing ${thingsArray.length +1}`
        // thingsArray.push(newThingText)
        setThings(prevState => [...prevState, newThingText])
    }

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
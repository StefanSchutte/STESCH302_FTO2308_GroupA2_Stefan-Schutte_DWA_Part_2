// import { htm } from 'https://unpkg.com/htm?module'
//
// console.log(htm)
//
// const logger = (...args) => console.log(args)
// const doThing = htm.bind(logger);
//
// doThing`
//     <family>
//     <parents>
//     <hobbies></hobbies>
// </parents>
//     <family>
//     `
//
// import React from "react";
//
// <h1>
//     <span>123</span>
// </h1>
//
// React.createElement(
//     'h1',
//     {},
//     [React.createElement(
//         'span',
//         { className: 'test'}
//     )]
// )

const Div =

<Div></Div>
<div></div>

const App = () => {
    return (
        <div id='123'>Hello</div>
    )
}

React.createElement('div', { id: '123' }, 'Hello' )

const Example2 = () => {
    return <div id='123'>World</div>
}

console.log(React.createElement(Example2), <App />)

const root = ReactDOM.createRoot(document.querySelector('#app'))

root.render(<App />)

setTimeout(() => root.render(<Example2 />), 3000)

//hooks
const useHook = (initialValue, rerender) => {
    const value = initialValue
    const setValue = (newValue) => {
        value = newValue
        rerender()
    }
    return [value, setValue]
}

coonst [count, setCount] = useHook(1, ()=> console.log('fired'))

const App2 = () => {

    const [count, setCount] = React.useState(1)

    const handleIncrease = () => setCount(count + 1)
    const handleDecrease = () => setCount(count - 1)

    React.useEffect(() => {
        console.log(`count${count}`)
    }, [count])

    return (
        <div>
            <button onClick={handleDecrease}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrease}>+</button>
            <button onClick={() => console.log(count)}>SHOW</button>
        </div>
    )
}

const Example = () => {
    return <div>1</div>
}
1, 1
const MemoExample = React.memo(Example, () => user === 'Stefan')
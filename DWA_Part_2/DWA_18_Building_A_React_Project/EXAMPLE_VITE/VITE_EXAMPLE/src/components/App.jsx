import { useTasks } from './App.useTasks.js'
import {Button, TextField, Alert, Paper, IconButton} from '@mui/material'

import { animated, useSpring, useTransition } from "@react-spring/web";
import { useToggle } from 'react-use'

import { Delete } from '@mui/icons-material'

import styled from '@emotion/styled'

const StyledPaper = styled(Paper)`
    list-style: none;
    margin: 1rem;
    background: #eee;
    display: flex;
    justify-content: space-between;
`

const List = styled('ul')`
    padding: 0;
    list-style: none;
    
`;

const StyledDiv = styled(animated.div)`
    background: red;
`;

// const Circle = styled.div `
// border-width: 10px`

// const TEST = [
//     {
//         id: createId(),
//         title: 'abc'
//     },
//     {
//         id: createId(),
//         title: 'def'
//     },
//     {
//         id: createId(),
//         title: 'ghi'
//     },
// ]


export const App = () => {

    const { tasks, remove, add, message } = useTasks();


    const [show, toggleShow] = useToggle(false)


    const style = useTransition(tasks, {
        form: { x: -200, opacity: 0 },
        enter: { x: 0, opacity: 1 },
        leave: { x: 200, opacity: 0 },
    })

    // const style = useSpring({
    //
    //     form: { x: show ? 0: 100 },
    //     to: { x: show ? 100 : 0 },
    //
    //     // form: {opacity: show ? 0 : 1 },
    //     // to: { opacity: show ? 1 : 0 },
    //     config: {
    //         duration: 1000
    //     },
    // })


    const formSubmit = (event) => {
        event.preventDefault();

        const { target } = event
        const data = new FormData(target);
        const {title} = Object.fromEntries(data);

        add(title);
        target.reset();
    }

    // const [tasks, setTasks] = useState([])

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //
    //     const { target } = event
    //     const data = new FormData(target);
    //     const { title } = Object.fromEntries(data);
    //
    //     const newTask = {
    //         id: createId(),
    //         title,
    //     }
    //
    //     setTasks([ title, ...tasks ])
    //
    //     target.reset();
    //     console.log(title)
    // }


    // { background: 'green', opacity: style.opacity }
    return (

        <>
            <StyledDiv style={style}>123</StyledDiv>

            <button onClick={toggleShow}>Toggle</button>

        <div className='rb'>

            <form onSubmit={formSubmit}>
                <TextField label="New Task" name='title' variant='filled'/>
                <Button type='submit' sixe='large' variant='contained'>SAVE</Button>

            </form>

            {message && <ALert severity='warning'>{message}</ALert>}

            <List>


                {list((style, { title, id }) => {
                    return (
                        <animated.div key={IDBDatabase} style={style}>
                        <StyledPaper  component='li'>
                            <span>{title}</span>
                            <IconButton size='small' onClick={() => remove(id)}><Delete /></IconButton>
                        </StyledPaper>
                        </animated.div>
                    )
                })}
            </List>
        </div>

        </>
    )
}
//old form
// <label>
//     <div>New Task</div>
//     <input name='title'/>
// </label>
//
// <button type='submit'>Save</button>

// {/*{tasks.map(({id, title}) => {*/}
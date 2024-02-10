import {useState, useEffect} from "react";
import { v4 as createId } from 'uuid'

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

const createLocal= (id) => {
    const get = () => {
        const response = window.localStorage.getItem(id);
        if (!response) return [];
        return JSON.parse(response);
    }

    const set = (value) => {
        const string = JSON.stringify(value);
        window.localStorage.setItem(id, string);
    }

    return {
        get,
        set
    }
}
const saved = createLocal('783ed231-470d-4778-b984-459bf9e6b0e3')

/**
 * @typedef {object} TasksHook
 * prop {string}
 */


const useTasks = () => {
    const [tasks, setTasks] = useState([saved.get()]);

    useEffect(() => {
        saved.set(tasks);
    }, [tasks])

    const add = (title) => {
        const newTasks = [
            {
                id: createId(),
                title,
            },
            ...tasks,
        ]

        setTasks(newTasks);
    };
    const remove = (id) => {
        const newTasks = tasks.filter((item) => {
            return item.id !== id;
        })
        setTasks(newTasks)
    }



    return {
        tasks,
        add,
        remove,

    }
}

export const App = () => {

    const {tasks, remove, add } = useTasks();

    const formSubmit = (event) => {
        event.preventDefault();

        const { target } = event
        const data = new FormData(target);
        const { title } = Object.fromEntries(data);

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

    return (

        <div className='rb'>

            <form onSubmit={formSubmit}>
                <label>
                    <div>New Task</div>
                    <input name='title' />
                </label>

                <button type='submit'>Save</button>
            </form>

            <ul>
                {tasks.map(({ id, title }) => {
                    return (
                        <li key={id}>
                            <span>{title}</span>
                            <button onClick={() => remove(id)}>X</button>
                            </li>
                    )
            })}
            </ul>
        </div>
)
}
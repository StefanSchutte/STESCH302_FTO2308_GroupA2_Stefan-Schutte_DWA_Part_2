// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'
//
// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `
//
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

/**
 * @type {number | string}
 */
let hello = 123

let world: number|string = 123

// world = true;


const app = document.querySelector('#app');

type Elements = {
    /**
     * The value of counter.
     */
    count: HTMLSpanElement;
    add: HTMLButtonElement;
    subtract: HTMLButtonElement;
    reset: HTMLButtonElement;
}

// /**
//  * @typedef {object} Elements
//  * @prop {HTMLSpanElement} count
//  */

// let value: number | string |null = null
// const other = value

// const exampleFn = (value: string | null | {hello: 3}) => {
//     const inner = value as string
//}

const createElements = (): Elements => {
    //const attrs = ['count', 'add', 'subtract', 'reset'];

    const ref = {
        count: HTMLSpanElement,
        add: HTMLButtonElement,
        subtract: HTMLButtonElement,
        reset: HTMLButtonElement,
}

    const result = Object
        .entries(ref)
        .map(([key, value]) => {

            const node = document.querySelector(`[data-${key}]`)

            const isValid = node instanceof value
            if (!isValid) throw new Error(`${key} is incorrect DOM type`)
            return node;
    })

    const [count, add, subtract, reset] = result as [
        HTMLSpanElement, HTMLButtonElement, HTMLButtonElement, HTMLButtonElement
    ]

    console.log(result);

    return {
        add,
        reset,
        subtract,
        count,
    }

    // const count = document.createElement('span');
    // const add = document.createElement('button');
    // const subtract = document.createElement('button');
    // const reset = document.createElement('button')
}

// const elements = createElements()

// let count = 0;


// //function generator
//
// function* generatorExample(){
//     yield 123
//     yield 234
//     yield 'abc'
// }
//
// const example = generatorExample()
//
// console.log(example.next())
// for (const instance of example){
//     console.log(instance);
//}

type Counter = {
    get: () => number
    set: (value: number) => void
}

//local storage


type Local = {
    get: () => { count: number, lastChange: Date | null }
    set: (value: { count: number, lastChange: Date | null }) => void
}


/**
 *
 * @param id - this is a UUID value that is used to indicate specific value that is stored.
 */
const createLocal = (id: string) => {

    const get: Local['get'] = () => {

        const response = localStorage.getItem(id)

        if (!response){
            return {
                count: 0,
                lastChange: null,
            }
        }

        const obj = JSON.parse(response)

        if (typeof obj.count !== 'number')
            throw new Error ('local value has incorrect types')

        if (typeof obj.lastChange !== null && typeof obj.lastChange !== 'string'){
                throw new Error('local value has incorrect types')
        }

        return {
            count: obj.count,
            lastChange: obj.date && new Date(obj.date),
        }
    }

    const set: Local['set'] = (value) => {
        localStorage.setItem(id, JSON.stringify(value))
    }

    return {
        get,
        set,
    }
}


const createCounter = (): Counter => {
    const { count} = createElements();
    const local = createLocal('4a1e03b8-0b4f-4101-acbb-87a29edd64d7')

    const set: Counter['set'] = (value) => {
            count.innerText = value.toString()
        local.set({ count: value, lastChange: new Date()})
        }

        count.innerHTML = local.get().count.toString()

    return {
        get: () => parseInt(count.innerText),

        set,
    }
}

const createApp = () => {
    const { add,  subtract, reset } = createElements();
    const counter = createCounter();


    add.addEventListener('click', () => {
        counter.set(counter.get() +1 )
    })
    subtract.addEventListener('click', () => {
        counter.set(counter.get() -1 )
    })
    reset.addEventListener('click', () => {
        counter.set(0)
    })
}

createApp()


//generic

type BasicStorage<T> = {
    get: () => string
    set: (value: T) => void;
}
const createBasicStorage = <T>(id: string): BasicStorage<T> => {
    const get: BasicStorage<T>['get'] = () => {
        return localStorage.get(id);
    }

        const set: BasicStorage<T>['set'] = (value) => {
            localStorage.setItem(id, JSON.stringify(value))
        }

        return {
        get, set,
        }
}

const storage = createBasicStorage<boolean>('idid')
const storage2 = createBasicStorage<string | number>('idid')

// const value = undefined
// BasicStorage.set(value)

storage.set(true)


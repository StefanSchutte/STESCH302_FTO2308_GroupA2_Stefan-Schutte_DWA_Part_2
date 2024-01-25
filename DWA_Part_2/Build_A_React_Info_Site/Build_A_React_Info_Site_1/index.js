// ReactDOM.render(<h1>hello everyone</h1>, document.getElementById('root'))
//
// ReactDOM.render(
//     <ul>list
//         <li>item1</li>
//         <li>item2</li>
//     </ul>
//     , document.getElementById('root'))

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

function MainContent(){
    return (
        <h1>I'm learning React!</h1>
    )
}

ReactDOM.render(
    <div>
    <Navbar />
    <MainContent />
    </div>,
    document.getElementById("root")
)

// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)

//JSX
ReactDOM.render(<h1 className="header" >This is JSX</h1>, document.getElementById("root"))

//works the same
const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"
console.log(h1)

const element = <h1 className="header">This is JSX</h1>
console.log(element)

// JSX
ReactDOM.render(element, document.getElementById("root"))

ReactDOM.render(
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>,
    document.getElementById("root")
)

const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)

consle.log(page)
// {type: "div", key: null, ref: null, props: {children: [{type: "h1", key: null, ref: null, props: {className: "header", children: "This is JSX"}, _owner: null, _store: {}}, {type: "p", key: null, ref: null, props: {children: "This is a paragraph"}, _owner: null, _store: {}}]}, _owner: null, _store: {}}

ReactDOM.render(page
    ,
    document.getElementById("root")
)

// Challenge:

const nav = (
    <nav>
    <h1>website</h1>
    <ul>
        <li>Pricing:</li>
        <li>About:</li>
        <li>Contact</li>
    </ul>
    </nav>
)

ReactDOM.render (nav, document.getElementById("root"))
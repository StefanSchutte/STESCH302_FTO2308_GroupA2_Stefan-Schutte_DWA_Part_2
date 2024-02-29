import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.js";
import MainContent from "./MainContent.js";
import Footer from "./Footer.js";
//children component
// function Header() {
//     return (
//         <header>
//             <nav className='nav'>
//                 <img src="./react-logo.png" className='nav-logo' />
//                 <ul className='nav-items'>
//                     <li>Pricing</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }

// function MainContent() {
//     return (
//         <div>
//             <h1>Reasons I'm excited to learn React</h1>
//             <ol>
//                 <li>It's a popular library, so I'll be
//                     able to fit in with the cool kids!</li>
//                 <li>I'm more likely to get a job as a developer
//                     if I know React</li>
//             </ol>
//         </div>
//     )
// }
//parent component
function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

// function Footer() {
//     return (
//         <footer>
//             <small>© 2021 Ziroll development. All rights reserved.</small>
//         </footer>
//     )
// }

ReactDOM.render(<Page />, document.getElementById("root"));

/*
Quiz!

1. What is a React component?
A function that returns React elements. (UI)

2. What's wrong with this code?
```
function MyComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(<Header />, document.getElementById("root"))
```

 */

// first try at simple React with CDN 1

// ReactDOM.render(<h1>Hello Everyone!</h1>, document.getElementById("root"))

// Practice exercise 2
// ReactDOM.render(<ul><li>Strat</li><li>Tele</li><li>Les Paul</li></ul>, document.getElementById("root"))

// next practice 3
// function MainContent(){
//     return(
//         <h1>I'm Learning React!!</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         <MainContent />
//     </div>,
//     document.querySelector('#root')
// )

// 4 - multiple elements need to be wrapped in a 
// singular parent element

// ReactDOM.render(
//     <div>
//         <h1>This is JSX</h1>
//         <p>Learning JSX and multiple elements</p>
//     </div>,
//     document.querySelector('#root')
// )

// 4a can store JSX in a variable:

// const page = (
//     <div>
//         <h1>This is JSX</h1>
//         <p>Here is a new paragraph</p>
//     </div>
// )

// console.log(page)

// ReactDOM.render(
//     page,
//     document.querySelector('#root')
// )

// Challenge nav bar html

// const navBar = (
//     <nav>
//         <h1>Chris LTC</h1>
//         <ul>
//             <li>Pricing </li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(
//     navBar,
//     document.querySelector("#root")
// )


// thought experiment - ReactDOM takes JS and interprets them into real DOM elements. For now, locally I wioll use the CDN's. Scrimba can install the dependencies. In Scrimba, we must import React and ReactDOM
const page = (
    <div>
        <h1>Let's try</h1>
        <h2>To get this to work</h2>
        <p>This is a paragrasph</p>
        <h1>Not gonna work</h1>
    </div>
)

ReactDOM.render(
    page,
    document.querySelector('#root')
)
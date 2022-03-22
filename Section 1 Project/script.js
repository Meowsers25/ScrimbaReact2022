// first react project on Scrimba; static HTML page
// check out the inline styling; I originally had it connected to the css file

const page = (
    <div>
        <img src="react.png" alt="React logo" width="40px"/>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.render(
    page,
    document.querySelector('#root')
)

// Quiz after first project

// 1. Why do we need to `import React from "react"` in our files?

// Because of the dependencies (Scrimba)
// JSX can't be read

// 2. If I were to console.log(page) in index.js, what would show up?

// A JS Object
// what will be rendered to the DOM

// 3. What's wrong with this code:

// const page = (
//     <h1>Hello</h1>
//     <p>This is my website!</p>
// )

// Multiple elements need to be in a div
// single parent element

// 4. What does it mean for something to be "declarative" instead of "imperative"?

// Tell computer what to do - computer can handle details
// You don't have to spell out each step

// 5. What does it mean for something to be "composable"?

// You can build a project with small pieces
// first component practice
// * use Pascal case

// function TemporaryName(){
//     return(
//         <div>
//         <img src="react.png" alt="React logo" width="40px"/>
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100k stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
//     )
// }

// // call the function this way:
// ReactDOM.render(
//     <TemporaryName />,
//     document.querySelector('#root')
// )
/**
Challenge Part 1: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

function WhyReact(){
    return(
        <div>
            <header>
                <nav>
                    <img src="./react.png" width="60px" alt="React logo" />
                </nav>
            </header>
            <h1>Why I'm excited about React:</h1>
            <ol>
                <li>It's been a long time coming</li>
                <li>New Year, new challenge</li>
                <li>I love JavaScript</li>
            </ol>
            <footer>
                <small>© 2022 Lamothe development. All rights reserved.</small>
            </footer>
        </div>
    )
}

ReactDOM.render(
    <WhyReact/>,
    document.querySelector('#root')
)

// Quiz!

// 1. What is a React component?

// Reusable building block of a project
// function that returns an object for the DOM

// 2. What's wrong with this code?

// function myComponent() {
//     return (
//         <small>I'm tiny text!</small>
//     )
// }

// No Pascal Case for function name

// 3. What's wrong with this code?

// function Header() {
//     return (
//         <header>
//             <nav>
//                 <img src="./react-logo.png" width="40px" />
//             </nav>
//         </header>
//     )
// }

// ReactDOM.render(Header(), document.getElementById("root"))

// Needs to have one parent element; either a div or fragment tags
// also need to call the component differently
// <Header />
// Test with github
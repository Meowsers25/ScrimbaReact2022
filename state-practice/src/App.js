import React from "react";


//export default function App() {
  /**
   * Challenge: Set up state to track our count (initial value is 0)
   */
  //const [value, setValue] = React.useState(0)
  /**
     * Challenge: Create a function called `add` that runs
     * when the + button is clicked. (Can just console.log("add") for now)
     */
    /**
     * Challenge: 
     * See if you can think of a way to add 1 to the count
     * every time the + button is clicked
     */
    // function add(){
    //   setValue(value + 1) 
    // }
    /**
     * Challenge: 
     * Add functionality to the minus button
     */
    // function subtract(){
    //   setValue(value - 1)
    // }
        /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     * 
     * changed the above functions
     * convention is to use prev + state
     */
    /*function add(){
      setValue(prevValue => prevValue + 1)
    }

    function subtract(){
      setValue(prevValue => prevValue - 1)
    }
  return (
      <div className="counter">
          <button onClick={subtract} className="counter--minus">–</button>
          <div className="counter--count">
              <h1>{value}</h1>
          </div>
          <button onClick={add} className="counter--plus">+</button>
      </div>
  )
}
*/
// flipping state back and forth

export default function App() {
  /**
   * Challenge: 
   * - Initialize state for `isGoingOut` as a boolean
   * - Make it so clicking the div.state--value flips that
   *   boolean value (true -> false, false -> true)
   * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
   */
  const [isGoingOut, setIsGoingOut] = React.useState(true)

  function clickMe(){
    setIsGoingOut(prevState => prevState ? false : true)
  }
  
  return (
      <div className="state">
          <h1 className="state--title">Do I feel like going out tonight?</h1>
          <div className="state--value" onClick={clickMe}>
              <h1>{isGoingOut ? "Yes" : "No"}</h1>
          </div>
      </div>
  )
}












// function App() {
//   /**
//      * Challenge: Replace our hard-coded "Yes" on the page with 
//      * some state initiated with React.useState()
//      */

//   /**
//      * Challenge: 
//      * 1. Create a function called `handleClick` that runs
//      *    setIsImportant("No")
//      * 2. add a click event listener to the div.state--value
//      *    that runs `handleClick` when the div is clicked.
//      */

//     // array destructuring:
//   const [isImportant, setIsImportant] = React.useState("Yes")
//   console.log(isImportant)

//   function handleClick(){
//     setIsImportant("NO!")
//   }
//   return (
//     <div className="state">
//     <h1 className="state--title">Is state important to know?</h1>
//     <div onClick={handleClick} className="state--value">
//         <h1>{isImportant}</h1>
//     </div>
// </div>
//   );
// }

// export default App;

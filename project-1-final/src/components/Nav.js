import React from 'react'
// had to use the 2 .. for this to work
import reactLogo from '../images/logo192.png'
function Nav(){
    return(
        <nav className="nav-bar">
            <img className="small-logo" src={ reactLogo } alt="Small React Logo"/>
            <h2 className="facts">ReactFacts</h2>
            <h3 className="course">React Course - Project 1</h3>
        </nav>
    )
}

export default Nav
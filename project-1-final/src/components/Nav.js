import React from 'react'
// /Users/christianlamothe/Desktop/treact/project-1-final/src/images/logo192.png
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
import React from 'react'
// /Users/christianlamothe/Desktop/treact/project-1-final/src/images/logo192.png
import reactLogo from '../images/logo192.png'
function Nav(){
    return(
        <nav>
            <img src={ reactLogo } alt="Small React Logo"/>
            <h1 className="header">ReactFacts</h1>
        </nav>
    )
}

export default Nav
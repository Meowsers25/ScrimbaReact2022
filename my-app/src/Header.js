import React from 'react'
import reactLogo from "../src/images/react.png"

function Header(){
    return(
            <header>
                <nav className="nav-bar">
                    <img className="react-img" src={reactLogo} alt="React logo" />
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header> 
    )
}

export default Header
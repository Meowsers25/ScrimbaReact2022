// import React from 'react'
import largeLogo from '../images/reactjs-icon 2.png'
function MainContent(){
    return(
        <div className="main-body">
            <h1 className="fun">Fun Facts about React</h1>
            <div className="container">
                <ul className="list">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
                <img className="largeLogo" src={ largeLogo }alt="Large React logo"/>
            </div>
        </div>
    )
}

export default MainContent
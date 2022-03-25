import React from 'react'
import Me from "../images/me.jpg"

function Info(){
    return(
        <div className="container">
            <img className="img" src={ Me } alt="Me" />
            <h2 className="name">Christian Lamothe</h2>
            <h3 className="fd">Frontend Developer</h3>
            <h4 className="web">lamothe.development.com</h4>
            <button className="email">Email</button>
            <button className="linkedin">Linkedin</button>
        </div>
    )
}

export default Info
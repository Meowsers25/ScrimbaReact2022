import React from 'react'
import Me from "../images/me.png"
import Mail from "../images/Mail.png"
import Linkedin from "../images/linkedin.png"

function Info(){
    return(
        <div>
            <img className="img" src={ Me } alt="Me" />
            <h2 className="name">Christian Lamothe</h2>
            <h3 className="fd">Frontend Developer</h3>
            <h4 className="web">lamothe.development.com</h4>
            <button className="email"><img className="mpng" src={ Mail } alt="mail png" /> Email</button>
            <button className="linkedin"><img className="lpng" src={ Linkedin } alt="linkedin png" />Linkedin</button>
        </div>
    )
}

export default Info
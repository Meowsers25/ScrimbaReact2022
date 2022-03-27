import React from 'react'
import Cat1 from '../images/cat1.jpg'
import Mail from '../images/Mail.png'

export default function Contact(){
    return(
    <div className="contact-card">
            <img src={ Cat1 } alt="cute kitty 1"/>
            <h3>Mr. Whiskerson</h3>
            <div className="info-group">

                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
                <img src={ Mail } alt="email"/>
                <p>mr.whiskaz@catnap.meow</p>
            </div>
        </div>
    )
}
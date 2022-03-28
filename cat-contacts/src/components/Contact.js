import React from 'react'

export default function Contact(props){
    console.log(props)
    return(
    <div className="contact-card">
            <img src={ props.img } alt="cute kitty 1"/>
            <h3>{ props.name }</h3>
            <div className="info-group">
                <img src="images/phone.png" alt="phone" />
                <p>{ props.phone }</p>
            </div>
            <div className="info-group">
                <img src="images/Mail.png" alt="email"/>
                <p>{ props.email }</p>
            </div>
        </div>
    )
}
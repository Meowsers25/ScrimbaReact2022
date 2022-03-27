import React from 'react'
import AirBnb from '../images/airbnb 1.png'

export default function Navbar(){
    return(
        <nav className="nav">
            <img className="airbnb" src={ AirBnb } alt="airbnb logo" />
        </nav>
    )
}
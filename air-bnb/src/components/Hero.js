import React from 'react'
import Grid from '../images/Group 77.png'

export default function Hero(){
    return(
        <div className="hero">
            <img className="hero-group" src={ Grid } alt="Hero group photos" />
            <h1 className="hero-h">Online Experiences</h1>
            <p className="hero-p">Join unique interactive activities led by<br />one-of-a-kind hosts -- all without leaving <br />home.</p>
        </div>
    )
}
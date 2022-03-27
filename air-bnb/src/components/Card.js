import React from 'react'
import Swimmer from '../images/image 12.png'
import Star from '../images/Star 1.png'

export default function Card(){
    return(
        <section>
            <div className="swim">
                <img className="swimmer" src={ Swimmer } alt="swimmer" />
                <div className="card">
                    <img src={ Star } alt="star" className="star" />
                    <span>5.0</span>
                    <span className="gray">(6) • </span>
                    <span className="gray">USA</span>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><span className="bold">From $136</span> / person</p>
            </div>
        </section>
    )
}
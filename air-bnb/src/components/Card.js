// import React from 'react'
// import Swimmer from '../images/image 12.png'
// import Star from '../images/Star 1.png'

export default function Card(props){
    return(
        <section>
            <div className="swim">
                <img className="swimmer" src={ props.img } alt="swimmer" />
                <div className="card">
                    <img src="./images/Star 1.png" alt="star" className="star" />
                    <span>{ props.rating }</span>
                    <span className="gray">({ props.reviewCount }) • </span>
                    <span className="gray">{ props.country }</span>
                </div>
                <p>{ props.title }</p>
                <p><span className="bold">From ${ props.price }</span> / person</p>
            </div>
        </section>
    )
}
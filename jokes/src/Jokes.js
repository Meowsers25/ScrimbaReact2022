import React from 'react'

export default function Jokes({setup, punchline}){
    return(
        <div className="joke-card">
            <img src="./images/laugh.png" alt="laughing emoji" />
            <h3>{ setup }</h3>
            <h3>{ punchline }</h3>
        </div>
    )
}
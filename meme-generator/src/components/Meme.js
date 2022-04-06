import React from 'react'
import memesData from '../memesData'

/**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */

export default function Meme(props){

    const [memeImage, setMemeImage] = React.useState('')

    function getMemeImage(){
        const memesArray = memesData.data.memes 
        const randNum = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randNum].url)
    }
    
    return(
        
        <div className='inputs'>
            
            <div className='fields'>
                <input className='top ipt' placeholder='Top Text' type='text'/>
                <input className='bottom ipt' placeholder='Bottom Text' type='text'/>
            </div>
            <div className='pain'>
                <button onClick={getMemeImage} className='btn'><img className='btn-img' src='./images/btnImg.png' alt='button text' /></button>
            </div>
            <div className="align-img">
                <img className="genPhoto" src={memeImage} alt="" />
            </div>
        </div>
        
     
        
    )
}
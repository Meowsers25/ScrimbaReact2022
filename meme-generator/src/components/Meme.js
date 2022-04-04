import memesData from '../memesData'

export default function Meme(props){
    function getMemeImage(){
        const memesArray = memesData.data.memes 
        const randNum = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randNum].url
        console.log(url)
    }
    console.log()
    return(
        <div className='inputs'>
            <div className='fields'>
            <input className='top ipt' placeholder='Top Text' type='text'/>
            <input className='bottom ipt' placeholder='Bottom Text' type='text'/>
            </div>
            <div className='pain'>
            <button onClick={getMemeImage} className='btn'><img className='btn-img' src='./images/btnImg.png' alt='button text' /></button>
            </div>
        </div>
        
    )
}
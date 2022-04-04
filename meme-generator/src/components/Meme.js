export default function Meme(){
    return(
        <form className='inputs'>
            <div className='fields'>
            <input className='top ipt' placeholder='Top Text' type='text'/>
            <input className='bottom ipt' placeholder='Bottom Text' type='text'/>
            </div>
            <div className='pain'>
            <button className='btn'><img className='btn-img' src='./images/btnImg.png' alt='button text' /></button>
            </div>
        </form>
        
    )
}
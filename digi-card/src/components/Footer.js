import React from 'react'
import Facebook from '../images/Facebook Icon.png'
import GitHub from '../images/GitHub Icon.png'
import Instagram from '../images/Instagram Icon.png'
import Twitter from '../images/Twitter Icon.png'

function Footer(){
    return(
        <div className="footer">
            <img className="icon" src={ Twitter } alt="twitter png" />
            <img className="icon left" src={ Facebook } alt="facebook png" />
            <img className="icon left" src={ Instagram } alt="instagram png" />
            <img className="icon left" src={ GitHub } alt="github png" />
        </div>
    )
}

export default Footer
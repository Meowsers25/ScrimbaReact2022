import React from 'react'
import ReactDOM from 'react-dom'
import '../src/style.css'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

function WhyReact(){
    return(
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <WhyReact/>,
    document.querySelector('#root')
)




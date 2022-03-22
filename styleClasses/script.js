// import Header from "./Header";

function Header(){
    return(
            <header>
                <nav className="nav-bar">
                    <img className="react-img" src="./react.png" alt="React logo" />
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header> 
    )
}

function Content(){
    return(
        <div className="main-body">
            <h1>Why I'm excited about React:</h1>
            <ol>
                <li>It's been a long time coming</li>
                <li>New Year, new challenge</li>
                <li>I love JavaScript</li>
            </ol>
        </div>
    )
}

function Footer(){
    return(
        <footer className="foot">
            <small>© 2022 Lamothe development. All rights reserved.</small>
        </footer>
    )
}

function WhyReact(){
    return(
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <WhyReact/>,
    document.querySelector('#root')
)


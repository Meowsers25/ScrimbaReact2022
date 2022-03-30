// Using props 
// ** check out the img tag with the back tics `` - used to define path here

/* export default function Card(props){
    return(
        <section>
            <div className="swim">
                <img className="swimmer" src={`./images/${ props.img }`} alt="swimmer" />
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
} */


// next lesson using .map() with the external data file (cardData.js)
// here i used props parameter names; could have just used 'props'
export default function Card({img, rating, reviewCount, location, title, price}){
    return(
        <section>
            <div className="swim">
                <img className="swimmer" src={img} alt="swimmer" />
                <div className="card">
                    <img src="./images/Star 1.png" alt="star" className="star" />
                    <span>{ rating }</span>
                    <span className="gray">({ reviewCount }) • </span>
                    <span className="gray">{ location }</span>
                </div>
                <p>{ title }</p>
                <p><span className="bold">From ${ price }</span> / person</p>
            </div>
        </section>
    )
}
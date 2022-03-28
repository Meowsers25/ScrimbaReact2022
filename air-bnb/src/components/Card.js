// Using props 
// ** check out the img tag with the back tics `` - used to define path here

export default function Card(props){
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
}
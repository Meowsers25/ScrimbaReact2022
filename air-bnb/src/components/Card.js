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
// here i used the spread operator
export default function Card(props){
    // console.log(props)
    // console.log(props)
    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if(props.location === "Online"){
        badgeText = "ONLINE"
    } 
    return(
        
            <div className="swim">
                {badgeText &&<div className="card--badge">{badgeText}</div>}
                <img className="swimmer" src={props.coverImg} alt="swimmer" />
                <div className="card">
                    <img src="./images/Star 1.png" alt="star" className="star" />
                    <span>{props.stats.classNamerating }</span>
                    <span className="gray">({props.stats.divreviewCount }) • </span>
                    <span className="gray">{props.location }</span>
                </div>
                <p className="card--title">{ props.title }</p>
                <p className="card--price"><span className="bold">From ${ props.price }</span> / person</p>
            </div>
        
    )
}

// changed this to just (props)
// export default function Card({img, rating, reviewCount, location, title, price, openSpots})

// here i used props parameter names; could have just used 'props'
// export default function Card(props){
//     // console.log(props)
//     // console.log(props)
//     let badgeText
//     if(props.card.openSpots === 0){
//         badgeText = "SOLD OUT"
//     } else if(props.card.location === "Online"){
//         badgeText = "ONLINE"
//     } 
//     return(
        
//             <div className="swim">
//                 {badgeText &&<div className="card--badge">{badgeText}</div>}
//                 <img className="swimmer" src={props.card.coverImg} alt="swimmer" />
//                 <div className="card">
//                     <img src="./images/Star 1.png" alt="star" className="star" />
//                     <span>{ props.card.stats.classNamerating }</span>
//                     <span className="gray">({ props.card.stats.divreviewCount }) • </span>
//                     <span className="gray">{ props.card.location }</span>
//                 </div>
//                 <p className="card--title">{ props.card.title }</p>
//                 <p className="card--price"><span className="bold">From ${ props.card.price }</span> / person</p>
//             </div>
        
//     )
// }
export default function Entry(props){
    return(
        <div className="travel-entry">
            <img className="country-pic" src={props.imageUrl} alt="beautiful pic" />
            <h3>{props.title}</h3>
            <h3>{props.location}</h3>
        </div>
    )
}
export default function Entry(props){
    return(
        <div className="travel-entry">
            <img className="country-pic" src={props.imageUrl} alt="beautiful pic" />
            <div className="travel-info">
                <img className="tab" src="./images/tab.png" alt="tab"/><span className="country-span">{props.location}</span>
                <a className="goog" href={props.googleMapsUrl}>View on Google Maps</a>
                <h4 className="title">{props.title}</h4>
                <h5 className="dates"><strong>{props.startDate}<span className="end-date">{props.endDate}</span></strong></h5>
                <p className="description">{props.description}</p>
                
            </div>
        </div>
    )
}
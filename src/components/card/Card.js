import './Card.css';

function Card(props) {
  return (
    <div className="card-container">
        <div className="card-image">
            <img src={props.item.coverImg} alt={props.item.imageAlt}/>
        </div>
        <div className="card-text">
            <div className='country'>
                <div className='country-text'>
                    {props.item.location.country}
                </div>
                <div className='google-maps'>
                    <a href={props.item.googleMaps}>View on Google Maps</a>
                </div>
            </div>
            <div className='destination'>
                <h2>{props.item.location.destination}</h2>
                <h4>Visited: {props.item.dateVisited}</h4>
                <p>{props.item.description}</p>
            </div>
        </div>
    </div>
  );
}

export default Card;

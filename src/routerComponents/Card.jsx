import React from 'react'
import img from '../aassets/android.png';
const Card = (props) => {
  return (
    <>
        <div className='col-md-4 col-10 mx-auto'>
        <div className="card mt-5" id='card'>
            <img className="card-img-top" src={props.img} alt="Card image cap" />
            <div className="card-body">
                <h4 className='card-title'>{props.title}</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>   
        </div>
    </>
  )
}

export default Card;

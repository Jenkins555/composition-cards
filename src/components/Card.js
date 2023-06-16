import React from 'react';

function Card(props) {
  return (
    <div className="card mb-4" style={{ maxWidth: '300px' }}>
      {props.image && <img src={props.image} className="card-img-top" alt="Card" />}
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <button className="btn btn-primary">{props.buttonText}</button>
      </div>
    </div>
  );
}

export default Card;
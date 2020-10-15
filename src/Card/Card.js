import React from 'react';
import './Card.css';

function Card(props){
    return(
        <div className='card'>
            <p onClick={props.openModal} className='edit'>Edit </p>
            <h1>{props.name}</h1>
            <p>Email: {props.email}</p>
            <p>Gender: {props.gender}</p>
            <p>Status: {props.status}</p>
        </div>
    );
}

export default Card;
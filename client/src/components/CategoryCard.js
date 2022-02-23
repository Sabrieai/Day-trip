import React, { useState, useEffect } from "react"
import useApplicationData from '../hooks/useApplicationData';
import "./CategoryCard.css"
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaWheelchair } from 'react-icons/fa';

function Cheaper(props){
  return(
    <div>
    <span className="expensive">${props.prev}</span>
    <span className="cheap"> ${props.curr}</span>
    </div>
  )
}
export default function CategoryCard(props) {
  const link = `/adventures/${props.id}`;
  console.log(props);
  //props.price undefined
  return (
    <main className="results-container">

    <div className="results-card-accesible">{props.accessible && <FaWheelchair/>}</div>
    <div className="results-card">
    <a className="review-card-link" href={link}>
      <div className="results-card-img-div">
      <img className="results-card-img" src={props.photo} />
      </div>
      <div className="adventure-card-title">{props.title}</div>
      <div> <FaMapMarkerAlt/> {props.city}</div>
      <div className="adventure-card-price">{props.prev > props.price ? <Cheaper prev={props.prev} curr={props.price}/>: `$${props.price}`}</div>
      <span className="adventure-card-pp">per person</span>
    </a>
    </div>
    </main>
  )
}
import React, { useState, useEffect } from "react"
import useApplicationData from '../hooks/useApplicationData';
import "./CategoryCard.css"

export default function CategoryCard(props) {
  const link = `/adventures/${props.id}`;
  console.log(props);
  //props.price undefined
  return (
    <main className="results-container">

    <div className="results-card">

    <a className="review-card-link" href={link}>
      <div className="results-card-img-div">
      <img className="results-card-img" src={props.photo} />
      </div>
      <div className="adventure-card-title">{props.title}</div>
      <div>in {props.city}</div>
      <div className="adventure-card-price">${props.price}</div>
      <span className="adventure-card-pp">per person</span>
    </a>
    </div>
    </main>
  )
}
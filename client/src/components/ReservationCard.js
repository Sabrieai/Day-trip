import React, { useState } from "react"
import useApplicationData from './../hooks/useApplicationData';
import './ReservationCard.css';


export default function ReservationCard(props) {
  return (
    <section className="res-card">
      <div className="res-img-div">
      <img className="res-img" src={`${props.photo}`} alt="" />
      <div className="res-details">

      <div className="res-title">{props.title}</div>
      <div className="res-city">In {props.city}</div>
      <div><span className="res-date">Reservation Date:</span> <span className="res-date-act">{props.date}</span></div>
      </div>

      </div>
    </section>
  )
}
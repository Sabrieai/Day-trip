import React, { useState, useEffect, useContext } from "react"
import useApplicationData from '../hooks/useApplicationData';
import ReservationCard from "./ReservationCard";
import { userContext } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";
// import './ReservationCard.css';

export default function ReservationsList(props) {

  let navigate = useNavigate(); 
  const reservationList = props.reservations.map((reservation, i) => {
    const routeChange = () =>{ 
      let path = `/reviews/${reservation.adventure_id}/${reservation.id}`; 
      navigate(path);
    }
   
    const resTime = Date.parse(reservation.date);
    const date = new Date(resTime);
    const readable = date.toDateString() 
  
    return (
     
      <div className ="Indv-reservation" key={i}>
      <ReservationCard
        key={i}
        city={reservation.city}
        photo={reservation.thumbnail_photo_url}
        title={reservation.title}
        id={reservation.id}
        date={readable}
      />
     
      {props.passed && <button onClick={routeChange}>Leave a Review</button>}
      </div>
    )
  })


  return (
    <section>
      { props.passed ? <h3> Adventures Taken</h3> : <h3> Adventures Yet To Come </h3>  }
      {reservationList}
    </section>
  )
}
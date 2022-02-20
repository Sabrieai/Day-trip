import React, { useState, useEffect, useContext } from "react"
import useApplicationData from '../hooks/useApplicationData';
import ReservationCard from "./ReservationCard";
import { userContext } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";
// import './ReservationCard.css';

export default function ReservationsList() {
  const { getReservations } = useApplicationData();
  const [reservations, setReservations] = useState([]);  
  const { user } = useContext(userContext)
  useEffect(() => {
   if(user.id){
    getReservations(user.id)
      .then((data) => {
        setReservations(data);
        console.log('DATA!!!!!!', data);
      })
    }
  }, [user.id])
  
  let navigate = useNavigate(); 
 
  

  const ReservationList = reservations.map((reservation, i) => {
    const routeChange = () =>{ 
      let path = `/reviews/${reservation.adventure_id}/${reservation.id}`; 
      navigate(path);
    }
    return (
      <div className ="Indv-reservation">
      <ReservationCard
        key={i}
        city={reservation.city}
        photo={reservation.thumbnail_photo_url}
        title={reservation.title}
        id={reservation.id}
        date={reservation.date}
      />
      <button onClick={routeChange}>Leave a Review</button>
      </div>
    )
  })


  return (
    <section>
      {ReservationList}
    </section>
  )
}
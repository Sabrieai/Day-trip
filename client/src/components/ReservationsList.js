import React, { useState, useEffect, useContext } from "react"
import useApplicationData from '../hooks/useApplicationData';
import ReservationCard from "./ReservationCard";
import { userContext } from "../providers/UserProvider";
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

  const ReservationList = reservations.map((reservation, i) => {
    return (
      <ReservationCard
        key={i}
        city={reservation.city}
        photo={reservation.thumbnail_photo_url}
        title={reservation.title}
        id={reservation.id}
        date={reservation.date}
      />
    )
  })


  return (
    <section>
      {ReservationList}
    </section>
  )
}
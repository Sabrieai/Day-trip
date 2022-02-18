import React, { useState, useEffect } from "react"
import useApplicationData from '../hooks/useApplicationData';
import ReservationCard from "./ReservationCard";
// import './ReservationCard.css';

export default function ReservationsList() {
  const { getReservations } = useApplicationData();
  const [reservations, setReservations] = useState([]);
  useEffect(() => {

    getReservations(5)
      .then((data) => {
        setReservations(data);
        console.log('DATA!!!!!!', data);
      })
  }, [])

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
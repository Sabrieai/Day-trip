import React from "react"
import ReservationCard from "./ReservationCard";
import { useNavigate } from "react-router-dom";

//list of reservation cards
export default function ReservationsList(props) {
  let navigate = useNavigate();
  const reservationList = props.reservations.map((reservation, i) => {
    const routeChange = () => {
      let path = `/reviews/${reservation.adventure_id}/${reservation.id}`;
      navigate(path);
    }

    const resTime = Date.parse(reservation.date);
    const date = new Date(resTime);
    const readable = date.toDateString()

    let alreadyReviewed = false

    if (props.reviewed.length > 0) {
      alreadyReviewed = props.reviewed.includes(reservation.id);
    }

    return (
      <div className="Indv-reservation" key={i}>
        <ReservationCard
          key={i}
          city={reservation.city}
          photo={reservation.thumbnail_photo_url}
          title={reservation.title}
          id={reservation.id}
          date={readable}
        />
        <div className="review-btn-div">
          {props.passed && alreadyReviewed ? <span className="res-ty">Thank you for Reviewing!</span> : props.passed && <button className="review-btn" onClick={routeChange}>Leave a Review</button>}
        </div>
      </div>
    )
  })

  return (
    <section>
      {props.passed ? <h3 className="res-header"> Adventures Taken :</h3> : <h3 className="res-header"> Adventures {props.today ? `Today :` : `Yet To Come :`} </h3>}
      {reservationList}
    </section>
  )
}
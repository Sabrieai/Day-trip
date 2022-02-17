import React from "react"
import useApplicationData from '../hooks/useApplicationData';

export default function ReservationForm() {
  const {
    postReservation
  } = useApplicationData()
  return (
    <>
      <button onClick={() => postReservation(4, 2, 50, 3, 'Monday', '15')}>Reserve</button>
    </>
  )
}


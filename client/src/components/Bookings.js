import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { userContext } from "../providers/UserProvider"
import useApplicationData from "../hooks/useApplicationData"
import { FaCalendarAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { isPassed } from "../helpers/Passed";

import './Bookings.css'

//handles adventure booking on individual adventure page
const Booking = (props) => {
  const { user } = useContext(userContext)
  const { postReservation } = useApplicationData();
  const [guests, setGuests] = useState('')

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/reservations`;
    navigate(path);
  }

  const total = guests !== '' && typeof guests === 'number' ? guests * props.price : 0

  const reserve = async () => {
    if (user.id) {

      const output = await postReservation(
        props.day.adventure_id,
        user.id,
        total,
        guests,
        props.day.day,
        '1'
      )
      return output;
    };
  }

  const handleReservation = async () => {
    if (user.id) {
      const res = await reserve();
      if (res.data.status === 'RESERVED') {
        routeChange();
      }
    }
  }

  const buttonText = () => {
    return props.passed ? `Passed` : props.day.available ? `Reserve` : `Reserved`
  }
  return (
    <div className={`booking__card__${props.passed}__${props.day.available}`}>
      <div className="booking__date_guests">
        <FaCalendarAlt className="booking__calendar_icon" />
        <h1 className="booking__day"> {props.day.day} </h1>
      </div>
      <div>
        <FaDollarSign className="booking__dollar_sign" />
        <span className="booking__price_pp"> {props.price} per guest </span>
      </div>
      <div>
        <FaUserPlus className="booking__user_icon" />
        <input className="booking__input"
          type="number"
          placeholder="Guests"
          value={guests < props.max ? guests : props.max}
          onChange={(event) => { setGuests(Number(event.target.value)) }}
        />
      </div>
      <div>
        <span className="booking__total_price"> <FaCalculator className="booking__calculator" /> {`Total: $${total}`}</span>
      </div>
      <h1> {props.day.availaible} </h1>
      <button disabled={props.passed || !props.day.available} onClick={handleReservation} className={`booking__reserve_button__${props.day.available}__${props.passed}`}>{buttonText()}</button>
    </div>
  )
}

export default function Bookings(props) {
  const bookingList = props.schedule.map((day) => {
    const passed = isPassed(day.day);

    return <Booking key={day.day} day={day} price={props.price} max={props.max} passed={passed} />
  })

  return (
    <>
      {bookingList}
    </>
  )
}


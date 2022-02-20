import React, { useContext, useEffect, useState } from "react"
import { userContext } from "../providers/UserProvider"
import useApplicationData from "../hooks/useApplicationData"
import { FaCalendarAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";

import './Bookings.css'


export default function Bookings(props) {
    const schedule = props.schedule
    const price = props.price
    const { user } = useContext(userContext)
    const { postReservation } = useApplicationData();

    const bookingList = schedule.map(day => {
        const reserve = () => {
            if (user.id) {

                postReservation(
                    day.adventure_id,
                    user.id,
                    total,
                    guests,
                    day.day,
                    '1'
                    )
                    console.log(`IN IN THE FUNCTION`)
      };
   console.log(`IN THE FUNCTION`)
}
const [guests, setGuests] = useState("")
const [total, setTotal] = useState(0)
useEffect(() => {
    setTotal(guests * price)
}, [guests])
return (
    <div className="booking__card_border">
<div className="booking__card">
    <div className="booking__date_guests">
    <FaCalendarAlt className="booking__calendar_icon"/>
        <h1 className="booking__day"> {day.day} </h1>
        <FaDollarSign className="booking__dollar_sign"/>
        <span className="booking__price_pp"> {price} per guest </span>
        </div>
        <div>
        <FaUserPlus className="booking__user_icon"/>
        <input className="booking__input"
            type="number"
            placeholder="Guests"
            value={guests < 15 ? guests : 15}
            onChange={(event) => { setGuests(event.target.value); console.log(guests, day.day) }}
        />
        <span className="booking__total_price"> <FaCalculator className="booking__calculator"/> {`Total: $${total}`}</span> 
        </div>
        <h1> {day.availaible} </h1>
        <button onClick={reserve} className="booking__reserve_button">Reserve</button>
{console.log(day.available,day.day, `DAY AND AVAILIBLE`)}
</div>
</div>
)
})
return (

    <>
        {bookingList}
    </>

)
}
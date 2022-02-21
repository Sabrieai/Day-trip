import React, { useContext, useEffect, useState } from "react"
import { userContext } from "../providers/UserProvider"
import useApplicationData from "../hooks/useApplicationData"
import { FaCalendarAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";

import './Bookings.css'

const Booking = (props) => {

    const { user } = useContext(userContext)
    const { postReservation } = useApplicationData();
    
    const [guests, setGuests] = useState('')
    
    //makes sure we only do math with numbers
    const total = guests !== '' && typeof guests === 'number' ? guests * props.price : 0
    console.log(typeof guests, `TYPE OF GUESTS`)
    
    const reserve = () => {
        if (user.id) {

            postReservation(
                props.day.adventure_id,
                user.id,
                total,
                guests,
                props.day.day,
                '1'
            )
            console.log(`IN IN THE FUNCTION`)
        };
        console.log(`IN THE FUNCTION`)
    }


    return (
        <div className="booking__card">
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
                    onChange={(event) => { setGuests(Number(event.target.value))}}
                />
            </div>
            <div>
                <span className="booking__total_price"> <FaCalculator className="booking__calculator" /> {`Total: $${total}`}</span>
            </div>
            <h1> {props.day.availaible} </h1>
            <button onClick={reserve} className="booking__reserve_button">Reserve</button>
            {console.log(props.day.available, props.day.day, `DAY AND AVAILIBLE`)}
        </div>
    )
}

export default function Bookings(props) {

    const bookingList = props.schedule.map((day) => {
      return <Booking key={day.day} day={day}  price={props.price} max={props.max}/>
    })

    return (

        <>
            {bookingList}
        </>

    )
}


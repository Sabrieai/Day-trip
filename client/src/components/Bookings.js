import React, { useContext, useEffect, useState } from "react"
import { userContext } from "../providers/UserProvider"
import useApplicationData from "../hooks/useApplicationData"

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
    <>
        <h1> {day.day} </h1>
        <span> {price} / pp </span>
        <span> {props.max} </span>
        <span> {`Total price: ${total}`}</span>
        <h1> {day.availaible} </h1>
        <input className="booking__input"
            type="number"
            placeholder="Number of guests"
            value={guests < 15 ? guests : 15}
            onChange={(event) => { setGuests(event.target.value); console.log(guests, day.day) }}
        />
        <button onClick={reserve}>Reserve</button>
{console.log(day.available,day.day, `DAY AND AVAILIBLE`)}
    </>

)
})
return (

    <>
        {bookingList}
    </>

)
}
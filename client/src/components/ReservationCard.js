import React, { useState } from "react"
import useApplicationData from './../hooks/useApplicationData';



export default function ReservationCard(props) {


  return (


    <section>
      <img src={`${props.photo}`} alt="" />
      <div>{props.title}</div>
      <div>In {props.city}</div>
      <div>On {props.date}</div>
    </section>
  )
}
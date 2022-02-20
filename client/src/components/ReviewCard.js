import React, { useState } from "react"
import useApplicationData from './../hooks/useApplicationData';


export default function ReviewCard(props) {

  console.log('REVIEW PROPS', props);
  return (
    <section>
      <img src={`${props.avatar}`} alt="" />
      <div>{props.first_name} {props.last_name}</div>
      <div>comment: {props.comment}</div>
      <div>{props.rating} stars</div>
    </section>
  )
}
import React, { useState } from "react"
import useApplicationData from './../hooks/useApplicationData';
import ToggleFavourite from "./ToggleFavourite";



export default function FavouritesCard(props) {


  console.log('FAV PROPS', props);
  return (


    <section>
      <img src={`${props.photo}`} alt="" />
      <div>{props.title}</div>
      <div>In {props.city}</div>
      <ToggleFavourite />
    </section>
  )
}
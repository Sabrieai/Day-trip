import React from "react"
import Deleter from "./DeleteFavourite";



export default function FavouritesCard(props) {

  const link = `/adventures/${props.id}`;
  console.log('FAV PROPS', props);
  return (

    <section>
      <a href={link}>
      <img src={`${props.photo}`} alt="" />
      <div>{props.title}</div>
      <div>In {props.city}</div>
      </a>
      <Deleter id={props.id}/>
    </section>
  )
}
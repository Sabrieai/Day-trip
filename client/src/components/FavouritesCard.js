import React from "react"
import Deleter from "./DeleteFavourite";



export default function FavouritesCard(props) {

  const link = `/adventures/${props.id}`;
  console.log('FAV PROPS', props);
  return (
    <section className="favourites__card">
      <a href={link}>
        <img className="favourites__thumbnail" src={`${props.photo}`} alt="" />
        <div className="favourites__title">{props.title}</div>
        <div>In {props.city}</div>
      </a>
      <Deleter id={props.id} />
    </section>
  )
}
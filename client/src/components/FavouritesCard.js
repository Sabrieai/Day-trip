import React from "react"
import Deleter from "./DeleteFavourite";
import './FavouritesCard.css'

export default function FavouritesCard(props) {
const link = `/adventures/${props.id}`;
  console.log('FAV PROPS', props);
  return (
    <div className="center">
    <section className="favourites__card">
      <a className="a-link" href={link}>
        <div className="favourites-card-img">
        <img className="favourites__thumbnail" src={`${props.photo}`} alt="" />
        </div>
        <div className="favourites__title">{props.title}</div>
        <div className="favourites__city">In {props.city}</div>
      </a>
      <div className="heart">
      <Deleter id={props.id} />
      </div>
    </section>
    </div>
  )
}
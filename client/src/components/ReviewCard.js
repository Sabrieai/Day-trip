import React, { useState } from "react"
import useApplicationData from './../hooks/useApplicationData';
import './ReviewCard.css'
import {FaStar} from 'react-icons/fa'

//single review of an adventure
export default function ReviewCard(props) {

  return (
    <section className="review__card">
      <div className="review__profile">
      <img className="review__avatar" src={`${props.avatar}`} alt="" />
      <div className="review__name">{props.first_name} {props.last_name}</div>
      </div>
      <div className="review__comment_rating">
         <span className="review-title">{props.title}</span>
      <div className="review__rating"><FaStar className="review__star"/> {props.rating} stars</div>
      <div className="review__comment">"{props.comment}"</div>
      </div>
    </section>
  )
}
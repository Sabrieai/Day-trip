import React, { useState } from "react"
import useApplicationData from './../hooks/useApplicationData';
import './ReviewCard.css'
import {FaStar} from 'react-icons/fa'


export default function ReviewCard(props) {

  console.log('REVIEW PROPS', props);
  return (
    <section className="review__card">
      <div className="review__profile">
      <img className="review__avatar" src={`${props.avatar}`} alt="" />
      <div className="review__name">{props.first_name} {props.last_name}</div>
      </div>
      <div className="review__comment_rating">
      <div className="review__rating"><FaStar className="review__star"/> {props.rating} stars</div>
      <div className="review__comment">{props.comment}</div>
      </div>
    </section>
  )
}
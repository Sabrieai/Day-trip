import React, { useState, useEffect } from "react"
import useApplicationData from '../hooks/useApplicationData';

export default function CategoryCard(props) {
  const link = `/adventures/${props.id}`;
  return (
    <a href={link}>
      <img src={props.photo} />
      <div>{props.title}</div>
      <div>In {props.city}</div>
      <div>${props.price} per person</div>
    </a>
  )
}
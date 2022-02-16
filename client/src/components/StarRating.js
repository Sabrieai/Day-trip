import React, { useState } from "react"
import { FaStar } from 'react-icons/fa';
import './StarRating.css';

export default function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return ( <div>
    {[...Array(5)].map((star, i) => {
      const ratingVal = i + 1;
      return ( 
      <label>
        <input 
        type="radio" 
        name="rating" 
        value={ ratingVal } 
        onClick={() => (setRating(ratingVal))}/>
        <FaStar className="star" 
        onMouseEnter ={() => setHover(ratingVal)}
        onMouseLeave={() => setHover(null)} 
        color={ratingVal <= (hover || rating) ? "#ffc107" : "#e4e5e9"} size={100} />
        </label>
        )
    })}
  </div>
  )
}
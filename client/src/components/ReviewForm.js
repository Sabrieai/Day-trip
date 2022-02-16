import React from "react"
import StarRating from './StarRating';
import useApplicationData from './../hooks/useApplicationData';

export default function ReviewForm(props) {
  const { 
    postReview
  } = useApplicationData()
  return (
    <main className="review__form">
      <StarRating />
      <form onSubmit={event => event.preventDefault()}>
        <input className="review__create-input"
          type="text"
          placeholder="Leave a review..."
        >
        </input>
      </form>
      <button onClick={() => postReview(20, 1, 4, 5, 'cool stuff') } />
    </main>
  )
}


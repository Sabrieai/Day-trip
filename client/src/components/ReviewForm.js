import React from "react"
import StarRating from './StarRating';
import Button from './Button';

export default function ReviewForm() {
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
      <Button />
    </main>
  )
}
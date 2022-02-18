import React, { useState, useEffect } from "react"
import useApplicationData from '../hooks/useApplicationData';
import ReviewCard from "./ReviewCard";
// import './FavouritesCard.css';



export default function ReviewsList() {
  const { getReviewsILeft } = useApplicationData();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {

    getReviewsILeft(20)
      .then((data) => {
        console.log('REVIEW LIST', data)
        setReviews(data);
      })
  }, [])

  const reviewsList = reviews.map((review, i) => {
    return (
      <ReviewCard
        key={i}
        first_name={review.first_name}
        last_name={review.last_name}
        avatar={review.pic}
        comment={review.comment}
        rating={review.rating}
      />
    )
  })


  return (
    <section>
      {reviewsList}
    </section>
  )
}

import React, { useState, useEffect } from "react"
import useApplicationData from '../hooks/useApplicationData';
import ReviewCard from "./ReviewCard";
// import './FavouritesCard.css';



export default function ReviewsLeftForMeList() {
  const { getReviewsLeftForMe } = useApplicationData();
  const [reviewsLeft, setReviewsLeft] = useState([]);
  useEffect(() => {

    getReviewsLeftForMe(7)
      .then((data) => {
        console.log('REVIEW LEFT', data)
        setReviewsLeft(data);
      })
  }, [])

  const reviewsLeftList = reviewsLeft.map((review, i) => {
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
      {reviewsLeftList}
    </section>
  )
}

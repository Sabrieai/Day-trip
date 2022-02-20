import React, { useState, useEffect, useContext } from "react"
import useApplicationData from '../hooks/useApplicationData';
import { userContext } from "../providers/UserProvider";
import ReviewCard from "./ReviewCard";
// import './FavouritesCard.css';



export default function ReviewsList() {
  const { getReviewsILeft } = useApplicationData();
  const [reviews, setReviews] = useState([]);
  const {user} = useContext(userContext)
  useEffect(() => {
   if (user.id) {
    getReviewsILeft(user.id)
      .then((data) => {
        console.log('REVIEW LIST', data)
        setReviews(data);
      })
    }
  }, [user.id])

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
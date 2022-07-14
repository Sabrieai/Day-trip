import React, { useState, useEffect, useContext } from "react"
import { propTypes } from "react-bootstrap/esm/Image";
import useApplicationData from '../hooks/useApplicationData';
import { userContext } from "../providers/UserProvider";
import ReviewCard from "./ReviewCard";

//display all reviews
export default function ReviewsList() {
  const { getReviewsILeft } = useApplicationData();
  const [reviews, setReviews] = useState([]);
  const {user} = useContext(userContext)
  useEffect(() => {
   if (user.id) {
    getReviewsILeft(user.id)
      .then((data) => {
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
        title={review.title}
      />
    )
  })

  return (
    <section>
      {reviewsList}
    </section>
  )
}

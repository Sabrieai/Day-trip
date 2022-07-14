import React, { useState, useEffect, useContext } from "react"
import useApplicationData from '../hooks/useApplicationData';
import ReviewCard from "./ReviewCard";
import { userContext } from "../providers/UserProvider";


//reviews that other users have left for owner
export default function ReviewsLeftForMeList() {
  const { getReviewsLeftForMe } = useApplicationData();
  const [reviewsLeft, setReviewsLeft] = useState([]);
  const {user} = useContext(userContext);
  useEffect(() => {
     if(user.id){
    getReviewsLeftForMe(user.id)
      .then((data) => {
        setReviewsLeft(data);
      })
    }
  }, [user.id])

  const reviewsLeftList = reviewsLeft.map((review, i) => {
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
      {reviewsLeftList}
    </section>
  )
}

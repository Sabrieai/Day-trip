import React from "react";
import ReviewCard from "./ReviewCard";

//Adventure review list component
export default function ActivityReviews(props) {
  const activityReviewList = props.reviews.map((review, i) => {
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
      {activityReviewList}
    </section>
  )
};
import React from 'react';
import ReviewsList from '../components/ReviewsList';
import ReviewsLeftForMeList from '../components/ReviewsLeftForMeList';

export default function Reviews() {
  return (
    <div className="all-reviews">
      REVIEWS PAGE
      <div className="I-left">
        <ReviewsList />
      </div>
      <div className="Left-me">
        <ReviewsLeftForMeList />
      </div>
    </div>
  )

}
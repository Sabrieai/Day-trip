import React from 'react';
import ReviewsList from '../components/ReviewsList';
import ReviewsLeftForMeList from '../components/ReviewsLeftForMeList';

export default function Reviews() {
  return (
    <div className="all-reviews">
        <h1 className='reviews__header'>My Reviews</h1>
      <div className="I-left">
        <ReviewsList />
      </div>
      <div>
      <div className="Left-me">
        <ReviewsLeftForMeList />
      </div>
      </div>
    </div>
  )

}
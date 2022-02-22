import React from 'react';
import ReviewsList from '../components/ReviewsList';
import ReviewsLeftForMeList from '../components/ReviewsLeftForMeList';
import NavbarComponent from '../components/NavbarComponent';


export default function Reviews() {
  return (
    <>
      <NavbarComponent/>
    <div className="all-reviews">
      <div className="review-card">
        <h2 className='reviews__header'>My Reviews</h2>
        <ReviewsList />
      </div>

      <div className="review-card">
      <h2 className='reviews__header'>Reviews People Left Me</h2>
        <ReviewsLeftForMeList />
      </div>
    </div>
    </>
  )

}
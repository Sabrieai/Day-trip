import React from 'react';
import ReviewsList from '../components/ReviewsList';
import ReviewsLeftForMeList from '../components/ReviewsLeftForMeList';
import NavbarComponent from '../components/NavbarComponent';


export default function Reviews() {
  return (
    <div className="all-reviews">
      <NavbarComponent/>
        <h2 className='reviews__header'>My Reviews</h2>
      <div className="I-left">
        <ReviewsList />
      </div>
      <div>
      <h2 className='reviews__header'>Reviews People Left Me</h2>
      <div className="Left-me">
        <ReviewsLeftForMeList />
      </div>
      </div>
    </div>
  )

}
import React from 'react';
import { useNavigate, useParams } from 'react-router';
import ReviewsList from '../components/ReviewsList';
import ReviewsLeftForMeList from '../components/ReviewsLeftForMeList';

export default function Reviews() {
  let navigate = useNavigate();
  return (
    <div>
      REVIEWS PAGE
<ReviewsList/>
<ReviewsLeftForMeList/>
    </div>
  )

}
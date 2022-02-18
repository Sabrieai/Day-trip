import React from 'react';
import { useNavigate, useParams } from 'react-router';
import ReviewForm from '../components/ReviewForm';

export default function Reviews() {
  let navigate = useNavigate();
  return (
    <div>
      REVIEWS FORM PAGE
      <ReviewForm />
    </div>
  )

}
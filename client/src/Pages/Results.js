import React from 'react';
import { useNavigate, useParams } from 'react-router';
import ResultsList from '../components/ResultsList';

export default function Results() {
  let navigate = useNavigate();
  return (
    <div>
    RESULTS PAGE
      <ResultsList />
    </div>
  )

}
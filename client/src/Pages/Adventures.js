import React from 'react';
import { useNavigate, useParams } from 'react-router';
import AdventureCard from '../components/AdventureCard';

export default function Adventure() {
  let navigate = useNavigate();
  return (
    <div>
      ADVENTURE PAGE
<AdventureCard/>
    </div>
  )
}
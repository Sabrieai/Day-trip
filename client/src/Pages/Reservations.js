import React from 'react';
import { useNavigate, useParams } from 'react-router';
import ReservationsList from '../components/ReservationsList';

export default function Reservations(props) {
  let navigate = useNavigate();
  return (
    <div>
      RESERVATIONS PAGE
<ReservationsList/>
    </div>
  )

}
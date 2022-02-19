import React from 'react';
import { useNavigate, useParams } from 'react-router';
import FavouritesList from '../components/FavouritesList';


export default function Favourites() {
  let navigate = useNavigate();
  return (
    <div>
      FAVOURITES PAGE
      <FavouritesList/>
    </div>
  )

}
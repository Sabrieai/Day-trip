import React from 'react';
import { useNavigate, useParams } from 'react-router';
import FavouritesList from '../components/FavouritesList';


export default function Favourites() {
  let navigate = useNavigate();
  return (
    <div className='favourite-header'>
      My Favourites
      <FavouritesList/>
    </div>
  )

}
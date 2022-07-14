import React from 'react';
import { useNavigate, useParams } from 'react-router';
import FavouritesList from '../components/FavouritesList';
import NavbarComponent from '../components/NavbarComponent';

export default function Favourites() {
  let navigate = useNavigate();
  return (
    <div className='favourite-header'>
      <NavbarComponent />
      <h1 className="my-fav-title">My Favourites</h1>
      <FavouritesList />
    </div>
  )
}
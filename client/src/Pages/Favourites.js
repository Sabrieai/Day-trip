import React from 'react';
import { useNavigate, useParams } from 'react-router';
import FavouritesList from '../components/FavouritesList';
import NavbarComponent from '../components/NavbarComponent';

export default function Favourites() {
  let navigate = useNavigate();
  return (
    <div className='favourite-header'>
      <NavbarComponent/>
      My Favourites
      <FavouritesList/>
    </div>
  )

}
import React, { useState } from "react"
// import useApplicationData from './../hooks/useApplicationData';
import FavouritesCard from "./FavouritesCard";
import axios from "axios";



export default function FavouritesList() {
  const { getFavourites } = useApplicationData();
  const getFavourites = () => {

    return axios.get('http://localhost:8080/favourites')
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      })
  }
  return (
    <container>
      <FavouritesCard />
    </container>
  )
}
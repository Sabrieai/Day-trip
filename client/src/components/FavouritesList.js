import React, { useState, useEffect, useContext } from "react"
import useApplicationData from './../hooks/useApplicationData';
import FavouritesCard from "./FavouritesCard";
import './FavouritesCard.css';
import { userContext } from '../providers/UserProvider';

export default function FavouritesList() {
  const { user} = useContext(userContext);
  const { getFavourites } = useApplicationData();
  const [favourites=[], setFavourites] = useState();


  useEffect(() => {
     if (user.id) {
    getFavourites(user.id)
      .then((data) => {
        console.log(data, "DATA")
        setFavourites(data);
      })
      console.log("CHANGED", user.id)
    }
    
  }, [user.id])

console.log("USER FROM CONTEXT", user)
console.log(favourites, "Favourites");

  const favouriteList = favourites.map((favourite, i) => {
    return (
      <FavouritesCard
        key={i}
        city={favourite.city}
        photo={favourite.thumbnail_photo_url}
        title={favourite.title}
        id={favourite.adventure_id}
      />
    )
  })


  return (
    <section className="favourites-container">
      {favouriteList}
    </section>
  )
}

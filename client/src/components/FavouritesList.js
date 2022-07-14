import React, { useState, useEffect, useContext } from "react"
import useApplicationData from './../hooks/useApplicationData';
import FavouritesCard from "./FavouritesCard";
import './FavouritesCard.css';
import { userContext } from '../providers/UserProvider';

//list of favourited adventures
export default function FavouritesList() {
  const { user } = useContext(userContext);
  const { getFavourites } = useApplicationData();
  const [favourites = [], setFavourites] = useState();

  useEffect(() => {
    if (user.id) {
      getFavourites(user.id)
        .then((data) => {
          setFavourites(data);
        })
    }
  }, [user.id])

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

import React, { useState, useEffect } from "react"
import useApplicationData from './../hooks/useApplicationData';
import FavouritesCard from "./FavouritesCard";
import './FavouritesCard.css';



export default function FavouritesList() {
  const { getFavourites } = useApplicationData();
  const [favourites, setFavourites] = useState([]);
  useEffect(() => {

    getFavourites(3)
      .then((data) => {
        setFavourites(data);
      })
  }, [])

  const favouriteList = favourites.map((favourite, i) => {
    return (
      <FavouritesCard
        key={i}
        city={favourite.city}
        photo={favourite.thumbnail_photo_url}
        title={favourite.title}
        id={favourite.id}
      />
    )
  })


  return (
    <section>
      {favouriteList}
    </section>
  )
}

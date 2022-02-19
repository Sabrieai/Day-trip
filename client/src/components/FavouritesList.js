import React, { useState, useEffect, useContext } from "react"
import useApplicationData from './../hooks/useApplicationData';
import FavouritesCard from "./FavouritesCard";
import './FavouritesCard.css';
import { userContext } from '../providers/UserProvider';



export default function FavouritesList() {
  const { user} = useContext(userContext);
  const { getFavourites } = useApplicationData();
  const [favourites, setFavourites] = useState([]);
  const id = user.id;

  useEffect(() => {

    getFavourites(id)
      .then((data) => {
        setFavourites(data);
      })
  }, [])
 console.log("USER FROM CONTEXT", user)
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

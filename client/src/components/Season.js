import React, { useState, useEffect } from "react"
import { useParams } from "react-router";
import useApplicationData from '../hooks/useApplicationData';
import CategoryCard from "./CategoryCard";
// import './FavouritesCard.css';

export default function Season() {
  const params = useParams();
  console.log('PARAMSIN SEASON', params);

  const { getSeason } = useApplicationData();
  const [seasons, setSeasons] = useState([]);
  useEffect(() => {

    getSeason(params.season)
      .then((data) => {
        setSeasons(data);
        console.log(data)
      })
  }, [])

  const seasonList = seasons.map((season, i) => {
    return (
      <CategoryCard
        key={i}
        city={season.city}
        photo={season.thumbnail_photo_url}
        title={season.title}
        id={season.id}
        price={season.curr_price}
        prev={season.prev_price}
        accessible={season.accessible}
      />
    )
  })


  return (
    <section>
      <h4>{params.season.toUpperCase()} ACTIVITIES</h4>
      {seasonList}
    </section>
  )
}



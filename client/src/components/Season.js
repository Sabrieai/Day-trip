import React, { useState, useEffect } from "react"
import { useParams } from "react-router";
import useApplicationData from '../hooks/useApplicationData';
import CategoryCard from "./CategoryCard";

//results based off season selection
export default function Season() {
  const params = useParams();
  const { getSeason } = useApplicationData();
  const [seasons, setSeasons] = useState([]);
  useEffect(() => {
    getSeason(params.season)
      .then((data) => {
        setSeasons(data);
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
      <h2 className="season-act">{params.season.toUpperCase()} ACTIVITIES</h2>
      {seasonList}
    </section>
  )
}



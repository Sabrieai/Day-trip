import React, { useState, useEffect } from "react"
import { useParams } from "react-router";
import useApplicationData from '../hooks/useApplicationData';
import ToggleFavourite from "./ToggleFavourite";

export default function AdventureCard() {
  const { getAdventure } = useApplicationData();
  const [adventure, setAdventure] = useState([]);
  const [availability, setAvailability] = useState([]);

  const params = useParams();
  const adventureId = Number(params.id);
  useEffect(() => {

    getAdventure(adventureId)
      .then((data) => {
        setAdventure(data.adventure[0]);
        setAvailability(data.details)

      })
  }, [])

  return (
    <section>
      <ToggleFavourite
        id={adventure.id}
      />
      <div>{adventure.title}</div>
      <div>{adventure.city} {adventure.province}</div>
      <img src={adventure.cover_photo_url} />
      <div>{adventure.first_name} {adventure.last_name}</div>
      <img src={`${adventure.pic}`} alt="" />
      <div>{adventure.description}</div>
      <div>{adventure.curr_price}</div>
    </section>
  )
}

import React, { useState, useEffect, useContext } from "react"
import { useParams } from "react-router";
import useApplicationData from '../hooks/useApplicationData';
import { userContext } from "../providers/UserProvider";
import ToggleFavourite from "./ToggleFavourite";

export default function AdventureCard() {
  const { user } = useContext(userContext);
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


// if update is a popup on THIS page we can pass down props
  console.log(adventure, "Adventure")
  return (
    <section>
      <ToggleFavourite
        id={adventure.id}
      />
      <div>{adventure.title}</div>
      <div>{adventure.city} {adventure.province}</div>
      <img src={adventure.cover_photo_url} alt="" />
      <div>{adventure.first_name} {adventure.last_name}</div>
      <img src={`${adventure.pic}`} alt="" />
      <div>{adventure.description}</div>
      <div>{adventure.curr_price}</div>
      {/* <Bookings id={adventure.id}/> */}
      { adventure.owner_id === user.id  && <button>UPDATE</button>}
    </section>
  )
}

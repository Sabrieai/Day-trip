import React, { useState, useEffect, useContext } from "react"
import { useParams, useNavigate } from "react-router";
import useApplicationData from '../hooks/useApplicationData';
import { userContext } from "../providers/UserProvider";
import ToggleFavourite from "./ToggleFavourite";
import Bookings from "./Bookings"

export default function AdventureCard() {
  const { user } = useContext(userContext);
  const { getAdventure } = useApplicationData();
  const [adventure, setAdventure] = useState([]);
  const [availability, setAvailability] = useState([]);
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/user/update/${adventure.id}`; 
    navigate(path);
  }
  const params = useParams();
  const adventureId = Number(params.id);
  useEffect(() => {

    getAdventure(adventureId)
      .then((data) => {
        setAdventure(data.adventure[0]);
        setAvailability(data.details)
      })
  }, [])

  console.log(availability, "AVAILABILTY", adventure.curr_price) 

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
     { adventure.owner_id !== user.id  &&<Bookings price={adventure.curr_price} max={adventure.max_occupancy} schedule={availability}/>}
      { adventure.owner_id === user.id  && <button onClick={routeChange} > UPDATE</button>}
      
    </section>
  )
}
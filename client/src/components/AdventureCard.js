import React, { useState, useEffect, useContext } from "react"
import { useParams, useNavigate } from "react-router";
import useApplicationData from '../hooks/useApplicationData';
import { userContext } from "../providers/UserProvider";
import ToggleFavourite from "./ToggleFavourite";
import Bookings from "./Bookings"
import './AdventureCard.css'

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


      <div className="adventure__title">{adventure.title}</div>
      <div className="adventure__city_province">{adventure.city}, {adventure.province_state}, {adventure.country}</div>
      <div className="adventure_favourite">
      <ToggleFavourite
        id={adventure.id}
      /> save
      </div>
      <div className="adventure__photo_set">
      <img className="adventure_cover_photo" src={adventure.cover_photo_url} alt="" />
      <img className="adventure_thumbnail_photo" src={adventure.thumbnail_photo_url} alt="" />
      </div>
      <div className="adventure__host_profile">
      <div className="adventure_host_name">Adventure hosted by {adventure.first_name} {adventure.last_name}</div>
      <img className="adventure_host_pic" src={`${adventure.pic}`} alt="" />
      </div>
      <div className="adventure__price">${adventure.curr_price}</div>
      <div className="adventure__about_title">
      About your adventure 
      </div>
      <div className="adventure__description_div">
      <div className="adventure__description">{adventure.description}</div>
      </div>
     { adventure.owner_id !== user.id  &&<Bookings className="adventure__detail_price" price={adventure.curr_price} max={adventure.max_occupancy} schedule={availability}/>}
      { adventure.owner_id === user.id  && <button onClick={routeChange} > UPDATE</button>}
    </section>
  )
}

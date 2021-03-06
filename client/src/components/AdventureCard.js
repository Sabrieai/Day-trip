import React, { useState, useEffect, useContext } from "react"
import { useParams, useNavigate } from "react-router";
import useApplicationData from '../hooks/useApplicationData';
import { userContext } from "../providers/UserProvider";
import ToggleFavourite from "./ToggleFavourite";
import Bookings from "./Bookings"
import './AdventureCard.css'
import ActivityReviews from "./ActivityReviewList";
import { FaMapMarked } from 'react-icons/fa';
import { FaWheelchair } from 'react-icons/fa';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

//individual adventure cards
export default function AdventureCard() {
  const { user } = useContext(userContext);
  const { getAdventure, getAdventureReviews } = useApplicationData();
  const [adventure, setAdventure] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [reviews, setReviews] = useState([]);
  let navigate = useNavigate();
  const routeChange = () => {
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
      .then(() => {
        getAdventureReviews(adventureId)
          .then((data) => {
            setReviews(data)
          })
      })
  }, [adventureId])

  //display accessibility icon if true else leave blank
  const accessibilty = () => {
    return adventure.accessible ? <FaWheelchair className="chair" /> : ''
  }
  return (
    <section>
      <div className="adventure__title">{accessibilty()}{adventure.title}</div>
      <div className="adventure__city_province"><FaMapMarked /> {adventure.city}, {adventure.province_state}, {adventure.country}</div>
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
      {adventure.owner_id === user.id ? <span className="update-btn-adv"><Button style={{
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        width: 160, height: 50,
      }}
        onClick={routeChange}
        variant="contained"
        endIcon={<CheckCircleIcon />}>
        Update
      </Button> </span> : <Bookings className="adventure__detail_price" price={adventure.curr_price} max={adventure.max_occupancy} schedule={availability} />}
      <div className="adventure_review_component">Reviews:</div>

      <div className="activty-page-reviews">
        <ActivityReviews reviews={reviews} />
      </div>
    </section>
  )
}

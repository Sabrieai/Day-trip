import React, { useState, useContext } from "react"
import useApplicationData from '../hooks/useApplicationData';
import { FaHeart } from 'react-icons/fa';
import { userContext } from "../providers/UserProvider";
import './ToggleFavourite.css';

export default function DeleteFavourite(props) {
  const [favourite, setFavourite] = useState(null);
  const { user} = useContext(userContext);
  const id = props.id;
  console.log("ID",id);
  const {
    deleteFavourite
  } = useApplicationData()


  const onDelete = () => {
    deleteFavourite(user.id, id);
    setFavourite(favourite + 1);
  }

  if(favourite){
    window.location.reload();
  }

  console.log(favourite, "STATE OF FAVOURITE")

  return (
    <label className='favourite'>

      <FaHeart className='favouriteIcon' id='heart'
        color={"#ffc107"} size={100}
        onClick={onDelete}
      />
    </label>
  )
}
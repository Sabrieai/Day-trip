import React, { useState, useContext } from "react"
import useApplicationData from '../hooks/useApplicationData';
import { FaHeart } from 'react-icons/fa';
import { userContext } from "../providers/UserProvider";
import './ToggleFavourite.css';

//unfavourite an adventure by clicking icon
export default function DeleteFavourite(props) {
  const [favourite, setFavourite] = useState(null);
  const { user} = useContext(userContext);
  const id = props.id;
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

  return (
    <label className='favourite'>
      <FaHeart className='favouriteIcon' id='heart'
        color={"#f0246f"} 
        onClick={onDelete}
      />
    </label>
  )
}
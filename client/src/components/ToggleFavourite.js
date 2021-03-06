import React, { useState, useContext } from "react"
import useApplicationData from './../hooks/useApplicationData';
import { userContext } from "../providers/UserProvider";
import { FaHeart } from 'react-icons/fa';
import './ToggleFavourite.css';

//toggle favourite for adventure
export default function ToggleFavourite(props) {
  const [favourite, setFavourite] = useState(null);
  const { user} = useContext(userContext);
  const id = props.id;
  const {
    postFavourite,
    deleteFavourite
  } = useApplicationData()

  const onAdd = () => {
    postFavourite(user.id, id);
    setFavourite(favourite + 1);
  }

  const onDelete = () => {
    deleteFavourite(user.id, id);
    setFavourite(favourite + 1);
  }

  return (
    <label className='favourite'>
      <FaHeart className='favouriteIcon' id='heart'
        color={favourite % 2 ? '#f0246f' : "#e4e5e9"}
        onClick={favourite % 2 ? onDelete : onAdd}
      />
    </label>
  )
}
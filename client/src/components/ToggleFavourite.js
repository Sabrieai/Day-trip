import React, {useState} from "react"
import useApplicationData from './../hooks/useApplicationData';
import { FaHeart } from 'react-icons/fa';
import './ToggleFavourite.css';

export default function ToggleFavourite() {
  const [favourite, setFavourite] = useState(null);
  // const [hover, setHover] = useState(null);
  const {
    postFavourite,
    deleteFavourite
  } = useApplicationData()

  const onAdd = () => {
    postFavourite(1,15);
    setFavourite(favourite + 1);
 }

  const onDelete = () => {
    deleteFavourite(1,15);
    setFavourite(favourite + 1);
 }

 

  return (
    <label className='favourite'>
   
      <FaHeart className='favouriteIcon' id='heart'
      color={favourite %2 ? "#ffc107" : "#e4e5e9"} size={100} 
      onClick={favourite %2 ? onDelete : onAdd}
      />
    </label>
  )
}
import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import useApplicationData from './../hooks/useApplicationData';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { userContext } from "../providers/UserProvider";

export default function ReviewForm() {
  const { user } = useContext(userContext)
  const {
    postReview,
    getViews
  } = useApplicationData()
  const params = useParams();
  const adventure = Number(params.id);
  const reservation = Number(params.res);

  const [views, setViews] = useState({})

  useEffect(() => {
    getViews(adventure)
      .then((data => setViews(data)))
  }, [])

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const review = () => {
    if (user.id) {
      postReview(
        user.id,
        adventure,
        reservation,
        rating,
        comment
      )
    }
  }


  return (
    <main className="review__form__page">
      <div className="Views">
        <img src={views.thumbnail_photo_url} alt="" />
        <img src={views.pic} alt=""/>
        <img src={views.cover_photo_url} alt=""/>
        <div>{views.first_name} {views.last_name}</div>
      </div>
      <div className="review">
        <div className="Star">
          <Typography component="legend">Leave a Rating</Typography>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newRating) => {
              setRating(newRating);
            }}

          />
        </div>
        <form onSubmit={event => event.preventDefault()}>
          <input className="review__create-input"
            type="text"
            placeholder="Leave a review..."
            value={comment}
            onChange={(event) => { setComment(event.target.value)}}
          >
          </input>
        </form>
        <button onClick={review}>Submit</button>
      </div>
    </main >
  )
}


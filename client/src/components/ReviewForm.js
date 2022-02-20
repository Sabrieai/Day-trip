import React, { useContext, useState } from "react"
import { useParams } from "react-router-dom";
import useApplicationData from './../hooks/useApplicationData';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { userContext } from "../providers/UserProvider";

export default function ReviewForm() {
  const {user} = useContext(userContext)
  const {
    postReview
  } = useApplicationData()
 const params = useParams();
 const adventure = params.id;
 const reservation = params.res;
 console.log(params, `PARAMS`)

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  
  const review = () => {
    if (user.id){
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
    <main className="review__form">
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
          onChange={(event, newComment) => {
            setComment(newComment);
          }}
        >
        </input>
      </form>
      <button onClick={review}>Submit</button>
    </main>
  )
}


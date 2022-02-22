import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import useApplicationData from './../hooks/useApplicationData';
import Rating from '@mui/material/Rating';
import { userContext } from "../providers/UserProvider";
import "./ReviewForm.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PublishIcon from '@mui/icons-material/Publish';


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
        <div className="review-photod">
        <img className="review-cover" src={views.cover_photo_url} alt="" />
        <img className="review-thumbnail" src={views.thumbnail_photo_url} alt="" />
        </div>

        <div className="review-host-profile">

        <img className="review-host-img" src={views.pic} alt="" />
        <div className="review-host-name">
          Hosted by: {views.first_name} {views.last_name}
        <h2 className="header-leave-review">Leave the Host a Review</h2>
          </div>
        </div>
      </div>
      <div className="review">
        <div className="Star">
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newRating) => {
              setRating(newRating);
            }}
            style={{
             fontSize: 80
            }}
          />
        </div>
        <form onSubmit={event => event.preventDefault()}>

          <TextField
            id="outlined-multiline-static"
            label="Review"
            multiline
            rows={5}
            value={comment}
            onChange={(event) => { setComment(event.target.value) }}
            style={{ width: 500 }}
          />
        </form>
        <div className="submit-review-btn">

        <Button
          onClick={review}
          variant="contained"
          endIcon={<PublishIcon />}
          style={{
            backgroundColor: "#21b6ae",
            width: 300,
            height: 50,
            fontSize: 18,
            borderRadius: 35
          }}
        >Submit</Button>
                </div>

      </div>
    </main >
  )
}


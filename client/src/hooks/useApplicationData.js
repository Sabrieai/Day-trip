import React from "react";
import axios from "axios";

export default function useApplicationData() {
  console.log('inside hook')
  const postReview = (guest, adventure, reservation, rating, comment) => {
    console.log('attempting to post')
    return axios.post('http://localhost:8080/myreviews', {
      guest,
      adventure,
      reservation,
      rating,
      comment
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  const postAdventure = (owner_id, title, description, thumbnail_photo_url, cover_photo_url, prev_price, curr_price, accessible, street, city, province_state, post_code_zip, country, active, is_full, max_occupancy, season, category) => {
    console.log('attempting to post')
    return axios.post('http://localhost:8080/form/', {
      owner_id, 
      title, 
      description, 
      thumbnail_photo_url, 
      cover_photo_url, 
      prev_price, 
      curr_price, 
      accessible, 
      street, 
      city, 
      province_state, 
      post_code_zip, 
      country, 
      active, 
      is_full, 
      max_occupancy, 
      season, 
      category
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  return { postReview, postAdventure }
};


// const deleteAdventure = (id) => {
//   return axios.delete(`/form/${id}`)
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
// }
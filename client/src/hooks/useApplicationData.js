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
  return { postReview }
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
import axios from "axios";

export default function useApplicationData() {
  const postReview = (guest, adventure, reservation, rating, comment) => {
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
  const deleteAdventure = (id) => {
    return axios.delete(`http://localhost:8080/adventures/${id}`)
      .then(() => {
        console.log('response');
      })
      .catch((error) => {
        console.log(error);
      })
  }
  const updateAdventure = (adventure, title, description, thumbnail_photo_url, cover_photo_url, prev_price, curr_price, accessible, street, city, province_state, post_code_zip, country, active, is_full, max_occupancy, season, category) => {
    return axios.put('http://localhost:8080/form/', {
      adventure,
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

  const postReservation = (adventure, guest, totalPrice, totalGuests, day, paymentId) => {
    return axios.post('http://localhost:8080/reservation/', {
    adventure,
    guest,
    totalPrice,
    totalGuests,
    day,
    paymentId
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  return { postReview, postAdventure, deleteAdventure, updateAdventure, postReservation }
};

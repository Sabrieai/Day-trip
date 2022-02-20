import axios from "axios";

export default function useApplicationData() {

  // const [favourites, setFavourites] = useState();

  const postReview = (guest, adventure, reservation, rating, comment) => {
    return axios.post('http://localhost:8080/myreviews', {
      guest,
      adventure,
      reservation,
      rating,
      comment
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
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
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
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
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
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
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  const postFavourite = (user, adventure) => {
    return axios.post('http://localhost:8080/favourites', {
      user,
      adventure
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      })
  };

  const deleteFavourite = (user, adventure) => {

    return axios.delete(`http://localhost:8080/favourites/${user}/${adventure}`)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      })
  };

  const getFavourites = (id) => {

   return axios.get(`http://localhost:8080/favourites/${id}`)
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  const getReservations = (id) => {

   return axios.get(`http://localhost:8080/reservation/${id}`)
      .then(function(response) {
        console.log("response.data.reservations", response.data)
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  const getReviewsILeft = (id) => {

   return axios.get(`http://localhost:8080/myreviews/${id}`)
      .then(function(response) {
        console.log("response.data.MYREVIEWS", response.data)
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  const getReviewsLeftForMe = (id) => {

   return axios.get(`http://localhost:8080/reviews/${id}`)
      .then(function(response) {
        console.log("response.data.reviewsleft", response.data)
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  const getAdventure = (id) => {
    return axios.get(`http://localhost:8080/adventures/${id}`)
    .then(function(response) {
      console.log("MY ADVENTURES", response.data)
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  const getMyAdventures = (id) => {
    return axios.get(`http://localhost:8080/adventures/user/${id}`)
    .then(function(response) {
      console.log("response.data.adventure", response.data)
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  const getCategory = (category) =>{
    return axios.get(`http://localhost:8080/${category}`)
    .then(function(response) {
      console.log("CATEGORY RESPONSE.DATA", response.data)
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  const handleSearch = (search) => {
    return axios.get(`http://localhost:8080/search/${search}`)
      .then((data) => {
        return data
      })
      .catch(function(error) {
        console.log(error);
      })
  };

  const getPlaceholder = () => {
    return axios.get('http://localhost:8080/')
    .then((data) => {
      return data.data.placeholder.city;
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  const getUser = (id) => {
    return axios.get(`http://localhost:8080/login/${id}`)
    .then((data) => {
      return data.data[0]
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  const getViews = (id) => {
    return axios.get(`http://localhost:8080/reviews/view/${id}`)
    .then((data) => {
      return data.data[0]
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  return {
    postReview,
    postAdventure,
    deleteAdventure,
    updateAdventure,
    postReservation,
    postFavourite,
    deleteFavourite,
    getFavourites,
    getReservations,
    getReviewsILeft,
    getReviewsLeftForMe,
    getAdventure,
    getCategory,
    handleSearch,
    getPlaceholder,
    getMyAdventures,
    getUser
  }
};

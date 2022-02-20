import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import useApplicationData from '../hooks/useApplicationData';
import { userContext } from "../providers/UserProvider";

export default function AdventureForm() {
  const {
    postAdventure
  } = useApplicationData()
  const { user} = useContext(userContext);
  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = `/user/view`; 
    navigate(path);
  }

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [coverPhoto, setCover] = useState('');
  const [currPrice, setCurrPrice] = useState('');
  const [accessible, setAccessible] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [provinceState, setProvinceState] = useState('');
  const [postal, setPostal] = useState('');
  const [country, setCountry] = useState('');
  const [occupancy, setOccupancy] = useState('');
  const [season, setSeason] = useState('');
  const [category, setCategory] = useState('');

  const submit = () => {
    postAdventure(
      user.id,
      title,
      description,
      thumbnail,
      coverPhoto,
      0,
      currPrice,
      accessible,
      street,
      city,
      provinceState,
      postal,
      country,
      true,
      false,
      occupancy,
      season,
      category)
  }

  return (
    <main className="adventure__form">
      <form onSubmit={event => event.preventDefault()}>
        <input className="adventure__title-input"
          type="text"
          placeholder="title"
          value={title}
          onChange={(event) => { setTitle(event.target.value); console.log(title); }}
        >
        </input>
        <input className="adventure__description-input"
          type="text"
          placeholder="description"
          value={description}
          onChange={(event) => { setDescription(event.target.value); console.log(description); }}
        >
        </input>
        <input className="adventure__thumbnail-input"
          type="text"
          placeholder="thumbnail"
          value={thumbnail}
          onChange={(event) => setThumbnail(event.target.value)}
        >
        </input>
        <input className="adventure__cover__photo-input"
          type="text"
          placeholder="cover photo"
          value={coverPhoto}
          onChange={(event) => setCover(event.target.value)}
        >
        </input>
        <input className="adventure__current__price-input"
          type="number"
          placeholder="current price"
          value={currPrice}
          onChange={(event) => setCurrPrice(event.target.value)}
        >
        </input>

        <input className="adventure__street-input"
          type="text"
          placeholder="street"
          value={street}
          onChange={(event) => setStreet(event.target.value)}
        >
        </input>
        <input className="adventure__city-input"
          type="text"
          placeholder="city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        >
        </input>
        <input className="adventure__province__state-input"
          type="text"
          placeholder="province/state"
          value={provinceState}
          onChange={(event) => setProvinceState(event.target.value)}
        >
        </input>
        <input className="adventure__postcode__zip-input"
          type="text"
          placeholder="postal code/zip"
          value={postal}
          onChange={(event) => setPostal(event.target.value)}
        >
        </input>
        <input className="adventure__country-input"
          type="text"
          placeholder="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        >
        </input>
        <label htmlFor="accessible">Accessibility</label>
        <select onChange={(event) => setAccessible(event.target.value)} name="accessible" id="access">
          <option value="true" >Yes</option>
          <option value="false">No</option>
        </select>
        <input className="adventure__description-input"
          type="text"
          placeholder="occupancy"
          value={occupancy}
          onChange={(event) => setOccupancy(event.target.value)}
        >
        </input>
        <label htmlFor="lang">Category</label>
        <select onChange={(event) => setCategory(event.target.value)} name="category" id="lang">
          <option value="Art and Culture">Art and Culture</option>
          <option value="Food and Drink">Food and Drink</option>
          <option value="Sports">Sports</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Wellness">Wellness</option>
          <option value="Tours">Tours</option>
          <option value="Sightseeing">Sightseeing</option>
          <option value="Nature and Outdoors">Nature and Outdoors</option>

        </select>
        <label htmlFor="season">Season</label>
        <select onChange={(event) => setSeason(event.target.value)} name="seasons" id="lang">
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
        </select>
        <button onClick={()=>{submit(); routeChange();}}
        >Submit</button>
      </form>

    </main >
  )
}



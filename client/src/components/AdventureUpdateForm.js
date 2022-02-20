import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useApplicationData from './../hooks/useApplicationData';
import { useParams } from "react-router";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "./AdventureForm.css"

export default function AdventureForm() {
  const {
    getAdventure,
    updateAdventure
  } = useApplicationData()

  const params = useParams();
  const adventureId = Number(params.id);
  console.log(adventureId);

  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/user/view`;
    navigate(path);
  }

  const [adventure, setAdventure] = useState([]);

  useEffect(() => {

    getAdventure(adventureId)
      .then((data) => {
        setAdventure(data.adventure[0]);
      })
  }, [])
  console.log("ADVENTURE", adventure)

  useEffect(() => {
    if (adventure) {
      setTitle(adventure.title);
      setDescription(adventure.description);
      setThumbnail(adventure.thumbnail_photo_url);
      setCover(adventure.cover_photo_url);
      setPrevPrice(adventure.curr_price);
      setStreet(adventure.street);
      setCity(adventure.city);
      setProvinceState(adventure.province_state);
      setPostal(adventure.post_code_zip);
      setCountry(adventure.country);
      setOccupancy(adventure.max_occupancy);
      setSeason(adventure.season);
      setCategory(adventure.category);
      setActive(adventure.active);
      setAccessible(adventure.accessible);
    }
  }, [adventure.title])

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [coverPhoto, setCover] = useState();
  const [prevPrice, setPrevPrice] = useState();
  const [currPrice, setCurrPrice] = useState();
  const [accessible, setAccessible] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [provinceState, setProvinceState] = useState();
  const [postal, setPostal] = useState();
  const [country, setCountry] = useState();
  const [occupancy, setOccupancy] = useState();
  const [season, setSeason] = useState();
  const [category, setCategory] = useState();
  const [active, setActive] = useState();


  const update = () => {
    updateAdventure(
      adventureId,
      title,
      description,
      thumbnail,
      coverPhoto,
      prevPrice,
      currPrice,
      accessible,
      street,
      city,
      provinceState,
      postal,
      country,
      active,
      false,
      occupancy,
      season,
      category
    );

  }

  return (
    <main>
      <h1>Create an Adventure</h1>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        className="adv-form"
        onSubmit={event => event.preventDefault()}
      >
        <div className="form-section">
        <InputLabel id="demo-simple-select-label">Title</InputLabel>
          <TextField
            required
            id="outlined-required"
            placeholder="Title"
            value={title}
            onChange={(event) => { setTitle(event.target.value) }}
          />
                    <InputLabel id="demo-simple-select-label">Previous Price</InputLabel>
          <TextField
            required
            id="outlined-required"
            placeholder="Price Per Person"
            value={currPrice}
          />
                    <InputLabel id="demo-simple-select-label">New Price</InputLabel>
          <TextField
            required
            id="outlined-required"
            placeholder="Price Per Person"
            value={currPrice}
            onChange={(event) => { setCurrPrice(event.target.value) }}
          />
                    <InputLabel id="demo-simple-select-label">Max Guests Per Day</InputLabel>
          <TextField
            id="outlined-number"
            placeholder="Max Guests Per Day"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={occupancy}
            onChange={(event) => { setOccupancy(event.target.value) }}
          />
                    <InputLabel id="demo-simple-select-label">Street Address</InputLabel>
          <TextField
            required
            id="outlined-required"
            placeholder="Street Address"
            value={street}
            onChange={(event) => { setStreet(event.target.value) }}
          />
                    <InputLabel id="demo-simple-select-label">City</InputLabel>
          <TextField
            required
            id="outlined-required"
            placeholder="City"
            value={city}
            onChange={(event) => { setCity(event.target.value) }}
          />
                    <InputLabel id="demo-simple-select-label">Province/State</InputLabel>
          <TextField
            required
            id="outlined-required"
            placeholder="Province/State"
            value={provinceState}
            onChange={(event) => { setProvinceState(event.target.value) }}
          />
                    <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <TextField
            required
            id="outlined-required"
            placeholder="Country"
            value={country}
            onChange={(event) => { setCountry(event.target.value) }}
          />
                    <InputLabel id="demo-simple-select-label">Postal/Zip Code</InputLabel>
          <TextField
            required
            id="outlined-required"
            placeholder="Postal/Zip Code"
            value={postal}
            onChange={(event) => { setPostal(event.target.value) }}
          />
        </div>
        <div className="form-section">
        <InputLabel id="demo-simple-select-label">Description</InputLabel>
          <TextField
            id="outlined-multiline-static"
            placeholder="Description"
            multiline
            rows={4}
            value={description}
            onChange={(event) => { setDescription(event.target.value) }}
          />
                    <InputLabel id="demo-simple-select-label">Thumbnail URL</InputLabel>
          <TextField
            required
            id="outlined-required"
            placeholder="Thumbnail URL"
            value={thumbnail}
            onChange={(event) => { setThumbnail(event.target.value) }}
          />
                    <InputLabel id="demo-simple-select-label">Cover Photo URL</InputLabel>
          <TextField
            required
            id="outlined-required"
            placeholder="Cover Photo URL"
            value={coverPhoto}
            onChange={(event) => { setCover(event.target.value) }}
          />
          <InputLabel id="demo-simple-select">Accessibility</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            placeholder="accessible"
            style={{ minWidth: 220 }}
            value={accessible}
            onChange={(event) => { setAccessible(event.target.value) }}
          >
            <MenuItem value="true">Yes</MenuItem>
            <MenuItem value="false">No</MenuItem>
          </Select>
          <InputLabel id="demo-simple-select">Season</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            placeholder="season"
            style={{ minWidth: 220 }}
            value={season}
            onChange={(event) => { setSeason(event.target.value) }}
          >
            <MenuItem value="Spring">Spring</MenuItem>
            <MenuItem value="Summer">Summer</MenuItem>
            <MenuItem value="Fall">Fall</MenuItem>
            <MenuItem value="Winter">Winter</MenuItem>
          </Select>
          <InputLabel id="demo-simple-select">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            placeholder="category"
            style={{ minWidth: 220 }}
            value={category}
            onChange={(event) => { setCategory(event.target.value) }}
          >
            <MenuItem value="Art and Culture">Art and Culture</MenuItem>
            <MenuItem value="Food and Drink">Food and Drink</MenuItem>
            <MenuItem value="Sports">Sports</MenuItem>
            <MenuItem value="Entertainment">Entertainment</MenuItem>
            <MenuItem value="Wellness">Wellness</MenuItem>
            <MenuItem value="Tours">Tours</MenuItem>
            <MenuItem value="Sightseeing">Sightseeing</MenuItem>
            <MenuItem value="Nature and Outdoors">Nature and Outdoors</MenuItem>
          </Select>
          <InputLabel id="demo-simple-select">Active</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            placeholder="active"
            style={{ minWidth: 220 }}
            value={active}
            onChange={(event) => { setActive(event.target.value) }}
          >
            <MenuItem value="true">Yes</MenuItem>
            <MenuItem value="false">No</MenuItem>
          </Select>


          <div className="create-btn">
            <Button style={{
              borderRadius: 35,
              backgroundColor: "#21b6ae",
            }}
              onClick={() => { update(); routeChange(); }}
              variant="contained"
              endIcon={<CheckCircleIcon />}>
              Update
            </Button>
          </div>

          {/* <button onClick={() => { submit(); routeChange(); }}>Submit</button> */}
        </div>

      </Box>
    </main>
  );

  // return (
  //   <main className="adventure__form">
  //     <form onSubmit={event => event.preventDefault()}>
  //       <input className="adventure__title-input"
  //         type="text"
  //         placeholder="title"
  //         value={title}
  //         onChange={(event) => { setTitle(event.target.value); console.log(title); }}
  //       >
  //       </input>
  //       <input className="adventure__description-input"
  //         type="text"
  //         placeholder="description"
  //         value={description}
  //         onChange={(event) => { setDescription(event.target.value); console.log(description); }}
  //       >
  //       </input>
  //       <input className="adventure__thumbnail-input"
  //         type="text"
  //         placeholder="thumbnail"
  //         value={thumbnail}
  //         onChange={(event) => setThumbnail(event.target.value)}
  //       >
  //       </input>
  //       <input className="adventure__cover__photo-input"
  //         type="text"
  //         placeholder="cover photo"
  //         value={coverPhoto}
  //         onChange={(event) => setCover(event.target.value)}
  //       >
  //       </input>
  //       <input className="adventure__current__price-input"
  //         type="number"
  //         placeholder="current price"
  //         value={prevPrice}
  //       ></input>
  //       <input className="adventure__current__price-input"
  //         type="number"
  //         placeholder="current price"
  //         value={currPrice}
  //         onChange={(event) => setCurrPrice(event.target.value)}
  //       >
  //       </input>

  //       <input className="adventure__street-input"
  //         type="text"
  //         placeholder="street"
  //         value={street}
  //         onChange={(event) => setStreet(event.target.value)}
  //       >
  //       </input>
  //       <input className="adventure__city-input"
  //         type="text"
  //         placeholder="city"
  //         value={city}
  //         onChange={(event) => setCity(event.target.value)}
  //       >
  //       </input>
  //       <input className="adventure__province__state-input"
  //         type="text"
  //         placeholder="province/state"
  //         value={provinceState}
  //         onChange={(event) => setProvinceState(event.target.value)}
  //       >
  //       </input>
  //       <input className="adventure__postcode__zip-input"
  //         type="text"
  //         placeholder="postal code/zip"
  //         value={postal}
  //         onChange={(event) => setPostal(event.target.value)}
  //       >
  //       </input>
  //       <input className="adventure__country-input"
  //         type="text"
  //         placeholder="country"
  //         value={country}
  //         onChange={(event) => setCountry(event.target.value)}
  //       >
  //       </input>
  //       <label htmlFor="accessible">Accessibility</label>
  //       <select onChange={(event) => setAccessible(event.target.value)} name="accessible" id="access">
  //         <option value="true" >Yes</option>
  //         <option value="false">No</option>
  //       </select>
  //       <label htmlFor="active">Active</label>
  //       <select onChange={(event) => setActive(event.target.value)} name="active" id="access">
  //         <option value="true" >Yes</option>
  //         <option value="false">No</option>
  //       </select>
  //       <input className="adventure__description-input"
  //         type="text"
  //         placeholder="occupancy"
  //         value={occupancy}
  //         onChange={(event) => setOccupancy(event.target.value)}
  //       >
  //       </input>
  //       <label htmlFor="lang">Category</label>
  //       <select onChange={(event) => setCategory(event.target.value)} name="category" id="lang">
  //         <option value="Art and Culture">Art and Culture</option>
  //         <option value="Food and Drink">Food and Drink</option>
  //         <option value="Sports">Sports</option>
  //         <option value="Entertainment">Entertainment</option>
  //         <option value="Wellness">Wellness</option>
  //         <option value="Tours">Tours</option>
  //         <option value="Sightseeing">Sightseeing</option>
  //         <option value="Nature and Outdoors">Nature and Outdoors</option>

  //       </select>
  //       <label htmlFor="season">Season</label>
  //       <select onChange={(event) => setSeason(event.target.value)} name="seasons" id="lang">
  //         <option value="Spring">Spring</option>
  //         <option value="Summer">Summer</option>
  //         <option value="Fall">Fall</option>
  //         <option value="Winter">Winter</option>
  //       </select>
  //       <button onClick={() => { update(); routeChange(); }}>Update</button>
  //     </form>

  //   </main>
  // )
}
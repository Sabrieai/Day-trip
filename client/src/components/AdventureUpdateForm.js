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
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "./AdventureForm.css"


export default function AdventureForm() {
  const {
    getAdventure,
    updateAdventure,
    deleteAdventure
  } = useApplicationData()

  const params = useParams();
  const adventureId = Number(params.id);
  console.log(adventureId);

  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/user/view`;
    navigate(path, {state:true});
  }

  useEffect(() => {

    getAdventure(adventureId)
      .then((data) => {

        const adventure = data.adventure[0];
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
      })
  }, [])


  const [title, setTitle] = useState(``);
  const [description, setDescription] = useState(``);
  const [thumbnail, setThumbnail] = useState(``);
  const [coverPhoto, setCover] = useState(``);
  const [prevPrice, setPrevPrice] = useState(``);
  const [currPrice, setCurrPrice] = useState(``);
  const [accessible, setAccessible] = useState(``);
  const [street, setStreet] = useState(``);
  const [city, setCity] = useState(``);
  const [provinceState, setProvinceState] = useState(``);
  const [postal, setPostal] = useState(``);
  const [country, setCountry] = useState(``);
  const [occupancy, setOccupancy] = useState(``);
  const [season, setSeason] = useState(``);
  const [category, setCategory] = useState(``);
  const [active, setActive] = useState(``);


  const update = async () => {
    const output = await updateAdventure(
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
    console.log(`OUTPUT`, output)
    return output;
  }

  const deleteThisAdventure = async () => {
    const output = await deleteAdventure(adventureId);
    console.log(`OUTPUT`, output)
    return output
  }

  const handleDelete = async () => {
    const res = await deleteThisAdventure();

    if (res.data.status === 'DELETED'){
      routeChange();
    }
  }
  
const handleUpdate = async () => {
  const res = await update();
  if (res.data.status === 'SAVED'){
    routeChange();
  }
 
}

  console.log(season, `CATEGORY`)
  return (
    <main>
      <h1 className="update-header">Update an Adventure</h1>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        className="adv-form"
        onSubmit={event => event.preventDefault()}
        style={{ width: 350 }}
      >
        <div className="form-section">
          <InputLabel id="demo-simple-select-label">Title</InputLabel>
          <TextField
            required
            id="outlined-required"
            placeholder="Title"
            value={title}
            onChange={(event) => { setTitle(event.target.value) }}
            style={{ width: 350 }}
          />
          <InputLabel id="demo-simple-select-label">Previous Price</InputLabel>
          <TextField
            required
            id="outlined-required"
            placeholder="Price Per Person"
            value={prevPrice}
            style={{ width: 350 }}
          />
          <InputLabel id="demo-simple-select-label">New Price</InputLabel>
          <TextField
            required
            id="outlined-required"
            placeholder="Price Per Person"
            value={currPrice}
            onChange={(event) => { setCurrPrice(event.target.value) }}
            style={{ width: 350 }}
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
            style={{ width: 350 }}
          />
          <InputLabel id="demo-simple-select-label">Street Address</InputLabel>
          <TextField
            required
            id="outlined-required"
            placeholder="Street Address"
            value={street}
            onChange={(event) => { setStreet(event.target.value) }}
            style={{ width: 350 }}
          />
          <InputLabel id="demo-simple-select-label">City</InputLabel>
          <TextField
            required
            id="outlined-required"
            placeholder="City"
            value={city}
            onChange={(event) => { setCity(event.target.value) }}
            style={{ width: 350 }}
          />
          <InputLabel id="demo-simple-select-label">Province/State</InputLabel>
          <TextField
            required
            id="outlined-required"
            placeholder="Province/State"
            value={provinceState}
            onChange={(event) => { setProvinceState(event.target.value) }}
            style={{ width: 350 }}
          />
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <TextField
            required
            id="outlined-required"
            placeholder="Country"
            value={country}
            onChange={(event) => { setCountry(event.target.value) }}
            style={{ width: 350 }}
          />
          <InputLabel id="demo-simple-select-label">Postal/Zip Code</InputLabel>
          <TextField
            required
            id="outlined-required"
            placeholder="Postal/Zip Code"
            value={postal}
            onChange={(event) => { setPostal(event.target.value) }}
            style={{ width: 350 }}
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
            style={{ width: 350 }}
          />
          <InputLabel id="demo-simple-select-label">Thumbnail URL</InputLabel>
          <TextField
            required
            id="outlined-required"
            placeholder="Thumbnail URL"
            value={thumbnail}
            onChange={(event) => { setThumbnail(event.target.value) }}
            style={{ width: 350 }}
          />
          <InputLabel id="demo-simple-select-label">Cover Photo URL</InputLabel>
          <TextField
            required
            id="outlined-required"
            placeholder="Cover Photo URL"
            value={coverPhoto}
            onChange={(event) => { setCover(event.target.value) }}
            style={{ width: 350 }}
          />
          <InputLabel id="demo-simple-select">Accessibility</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            placeholder="accessible"
            style={{ width: 350 }}
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
            style={{ width: 350 }}
            value={season}
            onChange={(event) => { setSeason(event.target.value) }}
          >
            <MenuItem value="spring">Spring</MenuItem>
            <MenuItem value="summer">Summer</MenuItem>
            <MenuItem value="fall">Fall</MenuItem>
            <MenuItem value="winter">Winter</MenuItem>
          </Select>
          <InputLabel id="demo-simple-select">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            placeholder="category"
            style={{ width: 350 }}
            value={category}
            onChange={(event) => { setCategory(event.target.value); }}
          >
            <MenuItem value="Art and Culture">Art and Culture</MenuItem>
            <MenuItem value="Food and drink">Food and Drink</MenuItem>
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
            style={{ width: 350 }}
            value={active}
            onChange={(event) => { setActive(event.target.value) }}
          >
            <MenuItem value="true">Yes</MenuItem>
            <MenuItem value="false">No</MenuItem>
          </Select>

          <div className="update-delete-btns">
            <div className="update-btn">
              <Button style={{
                borderRadius: 35,
                backgroundColor: "#21b6ae",
                width: 160, height:50,
              }}
                onClick={handleUpdate}
                variant="contained"
                endIcon={<CheckCircleIcon />}>
                Update
              </Button>
            </div>
            <div className="form-delete-btn">
              <Button
                style={{
                  borderRadius: 35,
                  backgroundColor: "#C75D47",
                  width: 160, height:50,
                }}
                onClick={handleDelete}
                variant="contained"
                endIcon={<DeleteIcon />}
              >Delete</Button>
            </div>
          </div>

        </div>

      </Box>
    </main>
  );

}
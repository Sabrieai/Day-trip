import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import useApplicationData from '../hooks/useApplicationData';
import { userContext } from "../providers/UserProvider";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "./AdventureForm.css"

//new adventure form
export default function AdventureForm() {
  const {
    postAdventure
  } = useApplicationData()
  const { user } = useContext(userContext);
  let navigate = useNavigate();

  const routeChange = () => {
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

  const submit = async () => {
    const output = await postAdventure(
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

      return output;
  }

  const handleCreate = async () => {
    const res = await submit();

    if (res.data.status === 'CREATED'){
      routeChange();
    }
  }

  return (
    <main>
    <h1 className="create-header">Create an Adventure</h1>
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
        <TextField
          required
          id="outlined-required"
          label="Title"
          value={title}
          onChange={(event) => { setTitle(event.target.value) }}
          style={{width: 350}}
        />
        <TextField
          required
          id="outlined-required"
          label="Price Per Person"
          value={currPrice}
          onChange={(event) => { setCurrPrice(event.target.value) }}
          style={{width: 350}}
        />
        <TextField
          id="outlined-number"
          label="Max Guests Per Day"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={occupancy}
          onChange={(event) => { setOccupancy(event.target.value) }}
          style={{width: 350}}
        />
        <TextField
          required
          id="outlined-required"
          label="Street Address"
          value={street}
          onChange={(event) => { setStreet(event.target.value) }}
          style={{width: 350}}
        />
        <TextField
          required
          id="outlined-required"
          label="City"
          value={city}
          onChange={(event) => { setCity(event.target.value) }}
          style={{width: 350}}
        />
        <TextField
          required
          id="outlined-required"
          label="Province/State"
          value={provinceState}
          onChange={(event) => { setProvinceState(event.target.value) }}
          style={{width: 350}}
        />
        <TextField
          required
          id="outlined-required"
          label="Country"
          value={country}
          onChange={(event) => { setCountry(event.target.value) }}
          style={{width: 350}}
        />
        <TextField
          required
          id="outlined-required"
          label="Postal/Zip Code"
          value={postal}
          onChange={(event) => { setPostal(event.target.value) }}
          style={{width: 350}}
        />
      </div>
      <div className="form-section">
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          value={description}
          onChange={(event) => { setDescription(event.target.value) }}
          style={{width: 350}}
        />
        <TextField
          required
          id="outlined-required"
          label="Thumbnail URL"
          value={thumbnail}
          onChange={(event) => { setThumbnail(event.target.value) }}
          style={{width: 350}}
        />
        <TextField
          required
          id="outlined-required"
          label="Cover Photo URL"
          value={coverPhoto}
          onChange={(event) => { setCover(event.target.value) }}
          style={{width: 350}}
        />
        <InputLabel id="demo-simple-select-label">Accessibility</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="accessible"
          style={{width: 350}}
          value={accessible}
          onChange={(event) => { setAccessible(event.target.value) }}
        >
          <MenuItem value="true">Yes</MenuItem>
          <MenuItem value="false">No</MenuItem>
        </Select>
        <InputLabel id="demo-simple-select-label">Season</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="season"
          style={{width: 350}}
          value={season}
          onChange={(event) => { setSeason(event.target.value) }}
        >
          <MenuItem value="spring">Spring</MenuItem>
          <MenuItem value="summer">Summer</MenuItem>
          <MenuItem value="fall">Fall</MenuItem>
          <MenuItem value="winter">Winter</MenuItem>
          <MenuItem value="all">All</MenuItem>
        </Select>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="category"
          style={{width: 350}}
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

        <div className="create-btn">
          <Button 
          onClick={handleCreate} 
          variant="contained" 
          endIcon={<CheckCircleIcon />}
          style={{width: 300, height:50, fontSize:18, borderRadius: 35}}
          >
            Create
          </Button>
        </div>
      </div>
      <img src="http://img.picturequotes.com/2/19/18449/and-so-the-adventure-begins-quote-1.jpg" alt="" className="Quote"/>
    </Box>
    </main>
  );
}



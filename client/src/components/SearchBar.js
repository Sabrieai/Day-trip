import React, { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  console.log('SEARCH---', search);

  return (
    <>
      {/* <label htmlFor="search">SEARCH</label> */}
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <input
          className="appointment__create-input text--semi-bold"
          type="text"
          placeholder="Enter A Destination"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          data-testid="student-name-input"
        />
        <Button onClick={() => navigate(`results/${search}`)}> SEARCH</Button>

      </form>


    </>
  )
}

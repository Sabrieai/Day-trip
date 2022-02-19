import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useApplicationData from '../hooks/useApplicationData';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const [placeholder, setPlaceholder] = useState('')
  const navigate = useNavigate();

  const { getPlaceholder } = useApplicationData();

  useEffect(() => {

    getPlaceholder()
      .then((data) => {
        console.log('PLACEHOLDER', data)
        setPlaceholder(data);
      })
  }, [])

  console.log('SEARCH---', search);




  return (
    <>
      {/* <label htmlFor="search">SEARCH</label> */}
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <input
          className="appointment__create-input text--semi-bold"
          type="text"
          placeholder={`${placeholder} ... ?`}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          data-testid="student-name-input"
        />
        <Button onClick={() => navigate(`results/${search}`)}> SEARCH</Button>

      </form>


    </>
  )
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import useApplicationData from '../hooks/useApplicationData';
import { FaSearch } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import './SearchBar.css';



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
      <form autoComplete="off" onSubmit={event => event.preventDefault()} className="search__form">
        <div className="search__input_form">
        <input
          className="search-bar_input"
          type="text"
          placeholder={ placeholder ? `${placeholder}...?` : `Tulum...?`}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          data-testid="student-name-input"
        /> <FaMapMarkerAlt className="location__pin-icon"/>
        <button className="btn" onClick={() => navigate(`results/${search}`)} ><FaSearch className="search__icon"/></button>
        </div>
      </form>


    </>
  )
}


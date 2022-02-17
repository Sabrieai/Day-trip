import React, { useState } from "react";
import axios from "axios";

export default function SearchBar() {
  const [search, setSearch] = useState('');

  const handleSearch = (search) => {
    return axios.get(`http://localhost:8080/search/${search}`)
      .then((data) => {
        console.log('DATA', data);
      })
      .catch(function(error) {
        console.log(error);
      })
  };



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
        <button onClick={() => handleSearch(search) }> SEARCH</button>

      </form>

      {/* <form
      className="search-bar"
      placeholder="dfdfdfdf"
      onSubmit={handleSearch}
    >
      <input type="text"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      
      />
      <button onClick={console.log('CLICKED')}> SEARCH</button>
    </form > */}
    </>
  )
}

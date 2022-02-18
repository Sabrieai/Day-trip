import React, { useState, useEffect } from "react";
import axios from "axios";
import useApplicationData from './../hooks/useApplicationData';
import { useParams } from 'react-router-dom';
import CategoryCard from './CategoryCard';


export default function ResultsList() {

  const [results, setResults] = useState([]);
  const { handleSearch } = useApplicationData();
  const params = useParams();
  console.log('SEARCH', params);
  const search = params.query;
  useEffect(() => {
    handleSearch(search)
      .then((data) => {
        setResults(data);
      })
  }, [])

  const localList = results.map((result, i) => {
    return (
      <CategoryCard
        key={i}
        city={result.city}
        photo={result.thumbnail_photo_url}
        title={result.title}
        id={result.id}
        price={result.curr_price}
      />
    )
  })

  return (
    <div>
      {localList}
    </div>
  )

}


import React, { useState, useEffect } from "react";
import useApplicationData from './../hooks/useApplicationData';
import { useParams } from 'react-router-dom';
import CategoryCard from './CategoryCard';
import ErrorMsg from './ErrorMsg.js'

//search results
export default function ResultsList() {
  const [results, setResults] = useState([]);
  const { handleSearch } = useApplicationData();
  const params = useParams();
  const search = params.query;
  useEffect(() => {
    handleSearch(search)
      .then((data) => {
        setResults(data.data);
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
        prev={result.prev_price}
        accessible={result.accessible}
      />
    )
  })

  return (
    <div>
      {results.length > 0 ? localList : <ErrorMsg /> }
    </div>
  )
}


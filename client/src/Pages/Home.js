import React from 'react';
import { useNavigate, useParams } from 'react-router';
import CategoriesList from '../components/CategoriesList';
import SearchBar from '../components/SearchBar';


export default function Home() {
  let navigate = useNavigate();
  return (
    <div>
      HOME PAGE
      <SearchBar/>
      <CategoriesList/>
    </div>
  )

}
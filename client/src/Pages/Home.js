import React from 'react';
import { useNavigate, useParams } from 'react-router';
import CategoriesList from '../components/CategoriesList';
import SearchBar from '../components/SearchBar';
import './Home.css'


export default function Home() {
  let navigate = useNavigate();
  return (
    <main className='homepage'>
      HOME PAGE
      <SearchBar/>
      <CategoriesList/>
    </main>
  )

}
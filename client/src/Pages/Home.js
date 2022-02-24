import React from 'react';
import { useNavigate, useParams } from 'react-router';
import CategoriesList from '../components/CategoriesList';
import SearchBar from '../components/SearchBar';
import Hero from '../components/Video/Hero.mp4'
import './Home.css'


export default function Home() {
  let navigate = useNavigate();
  return (
    <main className='homepage'>
      <video autoPlay loop muted
      style={{
        position: "absolute",
        width: "100%",
        // left: "50%",
        height: "110%",
        objectFit: "cover",
        // transform: "translate(-50%, -50%)",
        zIndex: "-1"
      }}>
        <source src={Hero} type="video/mp4"/>
      </video>
      <div className="home-page-header"> 
      <img className="day-trip-logo-png" src="https://cdn.discordapp.com/attachments/941861557506289715/945728553666899998/Remove_background.png" alt="" />
      <h1 className="day-trip-logo">Daytrip</h1>
      </div>
      <SearchBar/>
      <CategoriesList/>
    </main>
  )

}
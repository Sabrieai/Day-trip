import React from 'react';
import { useNavigate, useParams } from 'react-router';
import AdventureCard from '../components/AdventureCard';
import NavbarComponent from '../components/NavbarComponent';


export default function Adventure() {

  return (
    <div>
      <NavbarComponent />
      <AdventureCard />
    </div>
  )
}
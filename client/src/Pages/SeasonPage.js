import React from 'react';
import { useParams } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import Season from '../components/Season';
import NavbarComponent from '../components/NavbarComponent';

export default function Categories() {
  const params = useParams();
  console.log('PARAMS----', params)
  return (

    <div>
      <NavbarComponent />
      <Routes>
        <Route path=":season" element={<Season />} />
      </Routes>
    </div>
  )
}
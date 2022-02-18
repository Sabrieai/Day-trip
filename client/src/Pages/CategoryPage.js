import React from 'react';
import { useParams } from 'react-router';
import { Routes, Route} from 'react-router-dom';
import Category from '../components/Category';

export default function Categories() {
  const params = useParams();
  console.log('PARAMS----', params)
  return (

    <div>
      FOOD AND DRINK CATEGORY
      {/* <Category /> */}

      <Routes>
        <Route path=":category" element={<Category />} />
        <Route path="/" element={<h2>Please choose an item from the list above</h2>} />
      </Routes>
    </div>
  )
}
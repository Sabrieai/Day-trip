import React from 'react';
import { useParams } from 'react-router';
import { Routes, Route} from 'react-router-dom';
import Category from '../components/Category';

export default function Categories() {
  const params = useParams();
  console.log('PARAMS----', params)
  return (

    <div>

      <Routes>
        <Route path=":category" element={<Category />} />
      </Routes>
    </div>
  )
}
import React from 'react';
import { useNavigate, useParams } from 'react-router';

export default function Home() {
  let navigate = useNavigate();
  return (
    <div>
      HOME PAGE
      <button onClick={() => { navigate("/adventures") }}>Search</button>
    </div>
  )

}
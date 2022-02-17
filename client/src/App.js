import React, { Component } from 'react';
import './App.css';
import ReviewForm from './components/ReviewForm'
import AdventureForm from './components/AdventureForm';
import MyAdventures from './components/MyAdventures';
import ReservationForm from './components/ReservationForm';

const App = () => {
  return (
    <div className='App'>
      <ReviewForm />
      <AdventureForm />
      <MyAdventures />
      <ReservationForm />
    </div>
  );

};

export default App
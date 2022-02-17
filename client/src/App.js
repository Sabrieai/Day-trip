import React, { Component } from 'react';
import './App.css';
import ReviewForm from './components/ReviewForm'
import AdventureForm from './components/AdventureForm';
import MyAdventures from './components/MyAdventures';

const App = () => {
  return (
    <div className='App'>
      <ReviewForm />
      <AdventureForm />
      <MyAdventures />
    </div>
  );

};

export default App
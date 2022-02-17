import React, { Component } from 'react';
import './App.css';
import ReviewForm from './components/ReviewForm'
import AdventureForm from './components/AdventureForm';

const App = () => {
  return (
    <div className='App'>
      <ReviewForm />
      <AdventureForm />
    </div>
  );

};

export default App
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { GoogleLogin } from 'react-google-login';
import ReviewForm from './components/ReviewForm'
import AdventureForm from './components/AdventureCreateForm';
import MyAdventures from './components/MyAdventures';
import ReservationForm from './components/ReservationForm';
import ToggleFavourite from "./components/ToggleFavourite";
import SearchBar from './components/SearchBar';
import Home from './Pages/Home';
import Favourites from './Pages/Favourites'
import Reservations from './Pages/Reservations';
import Reviews from './Pages/Reviews';
import Adventure from './Pages/Adventures';
import AdventureCreate from './Pages/AdventureCreate';
import AdventureUpdate from './Pages/AdventureUpdate';
import ReviewCreate from './Pages/ReviewCreate';
import Category from './Pages/CategoryPage';
import ResultsList from './Pages/Results'


const responseGoogle = response => {
  console.log(response);
};

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/myreviews" element={<Reviews />} />
        <Route path="/adventures/:id" element={<Adventure />} />

        <Route path="/adventures/create/:id" element={<AdventureCreate />} />
        <Route path="/adventures/update/:id" element={<AdventureUpdate />} />
        <Route path="/reviews/create/:id" element={<ReviewCreate />} />

        <Route path="/category/*" element={<Category />} />
        <Route path="/results/:query" element={<ResultsList />} />




        {/* <div className='App'> 
        <ReviewForm />
          <AdventureForm />
          <MyAdventures />
          <ReservationForm />  */}
        {/* <GoogleLogin
        clientId='808382542479-3st5n36i6eamdtgu9bqghm4811s4aree.apps.googleusercontent.com'
        onSuccess={responseGoogle}
        onFailure={responseGoogle} */}
        {/* /> */}
        {/* <ToggleFavourite />
          <SearchBar />
         </div> */}

      </Routes>
    </Router>
  );

};

export default App
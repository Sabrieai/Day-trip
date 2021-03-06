import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Favourites from './Pages/Favourites'
import Reservations from './Pages/Reservations';
import Reviews from './Pages/Reviews';
import Adventure from './Pages/Adventures';
import AdventureCreate from './Pages/AdventureCreate';
import AdventureUpdate from './Pages/AdventureUpdate';
import ReviewCreate from './Pages/ReviewCreate';
import Category from './Pages/CategoryPage';
import Myadventure from './components/MyAdventure';
import ResultsList from './Pages/Results'
import Season from './Pages/SeasonPage'
import UserProvider from './providers/UserProvider';

const App = () => {
return (
  <>
    <Router>
       <UserProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/myreviews" element={<Reviews />} />
        <Route path="/adventures/:id" element={<Adventure/>} />

        <Route path="/user/create" element={<AdventureCreate />} />
        <Route path="/user/update/:id" element={<AdventureUpdate />} />
        <Route path="/user/view/" element={<Myadventure />} />
        <Route path="/reviews/:id/:res" element={<ReviewCreate />} />

        <Route path="/category/*" element={<Category />} />
        <Route path="/season/*" element={<Season />} />
        <Route path="/results/:query" element={<ResultsList />} />
      </Routes>
      </UserProvider>
    </Router>
    </>
  );

};

export default App
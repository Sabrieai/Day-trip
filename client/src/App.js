import React from 'react';
import './App.css';
// import { GoogleLogin } from 'react-google-login';
import ReviewForm from './components/ReviewForm'
import AdventureForm from './components/AdventureForm';
import MyAdventures from './components/MyAdventures';
import ReservationForm from './components/ReservationForm';
import ToggleFavourite from "./components/ToggleFavourite";
import SearchBar from './components/SearchBar';


// const responseGoogle = response => {
//   console.log(response);
// };

const App = () => {
  return (
    <div className='App'>
      <ReviewForm />
      <AdventureForm />
      <MyAdventures />
      <ReservationForm />
      {/* <GoogleLogin
        clientId='808382542479-3st5n36i6eamdtgu9bqghm4811s4aree.apps.googleusercontent.com'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      /> */}
      <ToggleFavourite/>
      <SearchBar/>
    </div>
  );

};

export default App
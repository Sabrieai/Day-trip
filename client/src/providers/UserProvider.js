import React from 'react';
import { createContext, useState, useEffect, useProvider } from 'react';
import useApplicationData from '../hooks/useApplicationData';

// Create a Context
export const userContext = createContext();

// Create a Component wrapper from Context.Provider
export default function UserProvider(props) {

  const [user, setUser] = useState({});
  const { getUser } = useApplicationData();
   useEffect(() =>{
  getUser(1)
  .then((data) => {
    setUser(data);
})
}, [])

console.log("USER IN CONTEXT", user)
  const providerData = {user};


  return (
    <userContext.Provider value={providerData}>
      {props.children}
    </userContext.Provider>
  );
};
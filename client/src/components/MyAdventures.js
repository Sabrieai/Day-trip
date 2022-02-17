import React, { Fragment } from "react"
import useApplicationData from './../hooks/useApplicationData';

export default function MyAdventures() {
  const {
    deleteAdventure,
    updateAdventure
  } = useApplicationData()
  return (
    <>
      <button onClick={() => deleteAdventure(35)}>Delete</button>
      <button onClick={() => updateAdventure(12,'TEST','x','x','x',70,90,true,'98 Westbourne Grove','London','England','W2 5RU','United Kingdom',true,false,15,'Spring','Wellness')}>Update</button>
    </>
  )
}

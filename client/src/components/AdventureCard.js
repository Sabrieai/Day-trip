import React, { useState, useEffect } from "react"
import useApplicationData from '../hooks/useApplicationData';

export default function AdventureCard() {
  const { getAdventure } = useApplicationData();
  const [adventure, setAdventure] = useState([]);
  const [availability, setAvailability] = useState([]);
  useEffect(() => {

    getAdventure(20)
      .then((data) => {
        console.log('ADDDDVEN', data.adventure[0])
        setAdventure(data.adventure[0]);
        setAvailability(data.details)

      })
  }, [])

  return (
    <section>
      <div>{adventure.title}</div>
      <div>{adventure.city} {adventure.province}</div>
      <img src={adventure.cover_photo_url} />
      <div>{adventure.first_name} {adventure.last_name}</div>
      <img src={`${adventure.pic}`} alt="" />
      <div>{adventure.description}</div>
      <div>{adventure.curr_price}</div>
    </section>
  )
}

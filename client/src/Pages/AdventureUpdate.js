import React from "react"
import useApplicationData from './../hooks/useApplicationData';
import AdventureUpdateForm from "../components/AdventureUpdateForm";

export default function AdventureUpdate() {
  const {
    updateAdventure,
    deleteAdventure
  } = useApplicationData()
  return (
    <main className="adventure__form">
      <AdventureUpdateForm />
      <button onClick={() => updateAdventure(15, 'UPDATETEST', 'x', 'x', 'x', 70, 90, true, '98 Westbourne Grove', 'London', 'England', 'W2 5RU', 'United Kingdom', true, false, 15, 'Spring', 'Wellness')
      }>Update</button>
      <button onClick={() => deleteAdventure(5)
      }>Delete</button>
    </main>
  )
}
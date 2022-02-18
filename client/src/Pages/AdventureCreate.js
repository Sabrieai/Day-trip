import React from "react"
import useApplicationData from './../hooks/useApplicationData';
import AdventureCreateForm from "../components/AdventureCreateForm";

export default function AdventureCreate() {
  const {
    postAdventure
  } = useApplicationData()
  return (
    <main className="adventure__form">
      <AdventureCreateForm />
      <button onClick={() => postAdventure(12, 'CREATETEST', 'x', 'x', 'x', 70, 90, true, '98 Westbourne Grove', 'London', 'England', 'W2 5RU', 'United Kingdom', true, false, 15, 'Spring', 'Wellness')}
      >Submit</button>
    </main>
  )
}
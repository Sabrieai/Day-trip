import React from "react"
import useApplicationData from './../hooks/useApplicationData';
import AdventureUpdateForm from "../components/AdventureUpdateForm";
import { useParams } from "react-router";

export default function AdventureUpdate() {
  const {
    deleteAdventure
  } = useApplicationData()

  const params = useParams();
  const adventureId = Number(params.id);

  return (
    <main className="adventure__form">
      <AdventureUpdateForm />
      <button onClick={() => deleteAdventure(adventureId)
      }>Delete</button>
    </main>
  )
}
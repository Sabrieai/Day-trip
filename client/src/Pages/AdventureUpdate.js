import React from "react"
import AdventureUpdateForm from "../components/AdventureUpdateForm";
import NavbarComponent from '../components/NavbarComponent';

export default function AdventureUpdate() {

  return (
    <main className="adventure__form">
      <NavbarComponent />
      <AdventureUpdateForm />
    </main>
  )
}
import React from "react"
import AdventureCreateForm from "../components/AdventureCreateForm";
import NavbarComponent from '../components/NavbarComponent';

export default function AdventureCreate() {

  return (
    <main className="adventure__form">
      <NavbarComponent/>
      <AdventureCreateForm />
 
    </main>
  )
}
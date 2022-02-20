import React from "react"
import useApplicationData from './../hooks/useApplicationData';
import AdventureUpdateForm from "../components/AdventureUpdateForm";
import { useParams } from "react-router";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function AdventureUpdate() {
  const {
    deleteAdventure
  } = useApplicationData()

  const params = useParams();
  const adventureId = Number(params.id);

  return (
    <main className="adventure__form">
      <AdventureUpdateForm />
      <div className="form-delete-btn">
      <Button 
         style={{
          borderRadius: 35,
          backgroundColor: "#C75D47",
      }}
        onClick={() => deleteAdventure(adventureId)}
        variant="contained"
        endIcon={<DeleteIcon />}
      >Delete</Button>
      </div>
    </main>
  )
}
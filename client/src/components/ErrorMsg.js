import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'


//default error message
export default function ErrorMsg() {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <Alert className="results-alert" show={show} variant="dark">
        <Alert.Heading>No Results Found</Alert.Heading>
        <p>
          Hmm... It looks like we don't have anything for that location. Please check your spelling or create your own adventure.
        </p>
        <hr />
        <div className="back-btn-div">
          {show && <button className="results-back-btn" onClick={() => navigate(-1)}>Back</button>}
        </div>
      </Alert>
    </>
  );
}


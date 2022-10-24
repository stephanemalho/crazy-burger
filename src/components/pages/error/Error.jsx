import React from 'react'
import { useNavigate } from "react-router-dom"

export default function Error() {

  const Navigate = useNavigate();

  const handleLogin= (e) => {
    e.preventDefault();
    // redirect to Login page
    Navigate("/");
  }

  return (
    <>
      <h1>Error Page </h1><br/>
      <button onClick={handleLogin} >Retourner à la page d'accueil</button>
    </>
  )
}


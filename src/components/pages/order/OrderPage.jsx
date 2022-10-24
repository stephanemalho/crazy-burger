import React from 'react'
import { useNavigate, useLocation } from "react-router-dom"

function OrderPage() {
  
  const Navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  const handleLogin= (e) => {
    e.preventDefault();
    // redirect to Login page
    Navigate("/");
  }

  return (
    <>
      <h1>Bonjour { state }</h1><br/>
      <button onClick={handleLogin}>Déconnexion</button>  
    </>
  )
}

export default OrderPage
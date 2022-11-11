import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function OrderPage() {
  const navigate = useNavigate();
  const { userName } = useParams();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <h1>Bonjour {userName}</h1>
      <br />
      <button onClick={handleLogin}>Déconnexion</button>
    </>
  );
}

export default OrderPage;

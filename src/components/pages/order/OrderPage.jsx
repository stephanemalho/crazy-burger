import React from "react";
import { Link, useLocation } from "react-router-dom";

function OrderPage() {
  const { userName } = useLocation();

  return (
    <>
      <h1>Bonjour {userName}</h1>
      <br />
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </>
  );
}

export default OrderPage;

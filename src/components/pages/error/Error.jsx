import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  const redirectToLoginPage = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <h1>Error Page </h1>
      <br />
      <button onClick={redirectToLoginPage}>
        Retourner à la page d'accueil
      </button>
    </>
  );
}

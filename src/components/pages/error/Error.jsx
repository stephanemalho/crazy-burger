import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <h1>Error Page </h1>
      <br />
      <Link to="/">
        <button>Retourner à la page d'accueil</button>
      </Link>
    </>
  );
}

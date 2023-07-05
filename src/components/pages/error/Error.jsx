import React from "react";
import { useNavigate } from "react-router-dom";
import { errorPage } from "../../../utils/variables";

export default function Error() {
  const navigate = useNavigate();

  const redirectToLoginPage = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <h1>{errorPage.title}</h1>
      <br />
      <button onClick={redirectToLoginPage}>
        {errorPage.notFound}
      </button>
    </>
  );
}

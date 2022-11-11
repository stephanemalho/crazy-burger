import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  // state
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  // behavior
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName("");
    navigate(`order/${userName}`);
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  // render
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez vous !</h1>
      <br />
      <label htmlFor="name">
        <b>Connectez vous</b>
        <br />
        <input
          value={userName}
          type="text"
          id="name"
          placeholder="Entrez votre prénom"
          onChange={handleChange}
          required
        />
      </label>
      <button>Accéder à votre espace</button>
    </form>
  );
};

export default LoginForm;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  // state
  const [inputValue, setInputValue] = useState("");

  // behavior
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
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
          value={inputValue}
          type="text"
          id="name"
          placeholder="Entrez votre prénom"
          onChange={handleChange}
          required
        />
      </label>

      <Link to="/order">
        <button>Accéder à votre espace</button>
      </Link>
    </form>
  );
};

export default LoginForm;

import React, { useState } from 'react'

export default function LoginForm() {
  // state
  const [inputValue, setInputValue] = useState("");

  // behavior
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // render
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez vous !</h1>
      <br/>
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
      <button>Accéder à votre espace</button>
    </form>
  )
}

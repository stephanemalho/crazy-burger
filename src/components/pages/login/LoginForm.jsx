import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
  // state
  const [inputValue, setInputValue] = useState("");
  const Navigate = useNavigate();

  // behavior
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    Navigate("/order", { state: `${inputValue}` }); 
  }

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
      <button onClick={handleOrder}>Accéder à votre espace</button>
    </form>
  )
}

export default LoginForm;
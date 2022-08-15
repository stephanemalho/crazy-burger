import React from "react";
import { useState } from "react";
import FormTitle from "./FormTitle";

const Form = () => {
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
      <FormTitle />
      <label htmlFor="name">
        <b>Connectez vous</b>
        <br />
      </label>
      <input
        value={inputValue}
        type="text"
        id="name"
        placeholder="Entrez votre prénom"
        onChange={handleChange}
        required
      />
      <button>Accéder à votre espace</button>
    </form>
  );
};

export default Form;

import React from "react";
import { useState } from "react";
import Title from "./Title";

const Form = () => {
  // state
  const [inputValue, setInputValue] = useState("");

  // behavior
  const handleSubmit = (e) => {
    e.preventDefault();

    setInputValue(inputValue);

    alert(`Bonjour  ${inputValue}`);

    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // render
  return (
    <>
      <Title />
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={inputValue}
          type="text"
          placeholder="Entrez votre prénom"
          onChange={handleChange}
          required
        />
        <button>Accéder à votre espace</button>
      </form>
    </>
  );
};

export default Form;

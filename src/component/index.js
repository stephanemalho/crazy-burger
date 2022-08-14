import React from "react";
import { useState } from "react";

const Index = () => {
  // state
  const [state, setState] = useState("");

  // behavior
  const handleSubmit = (e) => {
    e.preventDefault();

    setState(state);

    alert(`Bonjour  ${state}`);

    setState("");
  };

  const handleChange = (e) => {
    setState(e.target.value);
  };

  // render
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        value={state}
        type="text"
        placeholder="Entrez votre prénom"
        onChange={handleChange}
        required
      />
      <button>Accéder à votre espace</button>
    </form>
  );
};

export default Index;

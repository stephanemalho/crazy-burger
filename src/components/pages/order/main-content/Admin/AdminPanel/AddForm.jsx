import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";

export default function AddForm() {

  const {handleAddCard} = useContext(OrderContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddCard();
  }


  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-previous">Image</div>
      <div className="inputs-field">
        <input type="text" value="Nom"/>
        <input type="text" value="url"/>
        <input type="text" value="prix"/>
      </div>
      <button className="submit-button">button</button>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;

  .image-previous {
    background: red;
    grid-area: 1/1/4/2;
  }
  .inputs-field {
    background: blue;
    grid-area: 1/2/4/3;

    display: grid;
  }
  .submit-button {
    background: green;
    grid-area: 4/-2/-1/-1;
  }
`;

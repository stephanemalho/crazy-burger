import React, { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../../assets/theme";

const EMPTY_CARD = {
  key: "",
  id: "",
  title: "",
  imageSource: "",
  price: "",
};

export default function AddForm() {
  const { handleAddCard } = useContext(OrderContext);

  const [newCard, setNewCard] = useState(EMPTY_CARD);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const NewCard = {
      ...newCard,
      id:  Date.now(),
      key: Date.now(),
    };

    handleAddCard(NewCard);
    setNewCard(EMPTY_CARD);
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-previous">Aucune image</div>
      <div className="inputs-field">
        <input
          type="text"
          onChange={handleChange}
          name="title"
          value={newCard.title}
          placeholder="Nom du produit"
        />
        <input
          type="text"
          onChange={handleChange}
          name="imageSource"
          value={newCard.imageSource}
          placeholder="Url "
        />
        <input
          type="text"
          onChange={handleChange}
          name="price"
          value={newCard.price ? newCard.price : ""}
          placeholder="Prix"
        />
      </div>
      <button className="submit-button">Ajouter un produit au menu</button>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;

  .image-previous {
    font-family: "open sans", sans-serif;
    color: ${theme.colors.greyMedium};
    grid-area: 1/1/4/2;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.borderRadius.round};
    margin: 20px;
    height: 140px;
    border: 1px solid ${theme.colors.greyLight};
  }
  .inputs-field {
    grid-area: 1/2/4/3;
    border-radius: ${theme.borderRadius.round};
    display: grid;
    padding: 20px 0;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 10px;
    input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    width: 100%;
    background-color: ${theme.colors.background_white};
    border-radius: ${theme.borderRadius.round};
    
    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
    .icon {
    font-size: ${theme.fonts.size.SM};
    margin: 0 13px 0 8px;
    display: flex; // to center icon vertically
  }
  }
  }
  .submit-button {
    color: ${theme.colors.white};
    grid-area: 4/-2/-1/-1;
    width: 40%;
    height: 40px;
    background-color: ${theme.colors.success};
    border-radius: ${theme.borderRadius.round};
    border: none;
    font-weight: ${theme.fonts.weights.bold};

    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.success};
      border: 1px solid ${theme.colors.success};

    &:active {
      background-color: ${theme.colors.success};
      color: ${theme.colors.white};
      border: none;
  }

}
  }
`;



 

  
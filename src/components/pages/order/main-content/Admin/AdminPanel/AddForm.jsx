import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../../assets/theme";
import TextInput from "../../../../../reusableUI/TextInput";
import SucessButton from "../../../../../reusableUI/MainButton";

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
      id: Date.now(),
      key: Date.now(),
    };

    handleAddCard(NewCard);
    setNewCard(EMPTY_CARD);
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-previous">Aucune image</div>
      <div className="inputs-field">
        <TextInput
          type="text"
          onChange={handleChange}
          name="title"
          value={newCard.title}
          placeholder="Nom du produit"
          Icon={<FaHamburger className="Icon" />}
          version="admin"
        />
        <TextInput
          type="text"
          onChange={handleChange}
          name="imageSource"
          value={newCard.imageSource}
          placeholder="Url "
          Icon={<BsFillCameraFill className="Icon" />}
          version="admin"
        />
        <TextInput
          type="text"
          onChange={handleChange}
          name="price"
          value={newCard.price ? newCard.price : ""}
          placeholder="Prix"
          Icon={<MdOutlineEuro className="Icon" />}
          version="admin"
        />
      </div>
      <SucessButton
        className="submit-button"
        label={"Ajouter un nouveau produit au menu"}
        version={"success"}
      />
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  width: 100%;
  padding-top: 5px;
  .image-previous {
    font-family: "open sans", sans-serif;
    color: ${theme.colors.greyMedium};
    grid-area: 1/1/4/2;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.borderRadius.round};
    margin: 20px auto;
    height: 140px;
    width: 70%;
    border: 1px solid ${theme.colors.greyLight};
  }
  .inputs-field {
    grid-area: 1/2/4/3;
    border-radius: ${theme.borderRadius.round};
    display: grid;
    padding: 20px 0 10px 0;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 10px;
    width: 80%;
  }
`;

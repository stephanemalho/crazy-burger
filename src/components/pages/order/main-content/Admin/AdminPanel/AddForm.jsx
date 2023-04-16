import React, { useContext, useState } from "react";
import styled from "styled-components";

import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../../assets/theme";
import TextInput from "../../../../../reusableUI/TextInput";
import ImagePreviou from "./ImagePreviou";
import SuccessBox from "./SuccessBox";
import { getInputTextConfig } from "./getInputTextConfig";

export const EMPTY_CARD = {
  key: "",
  id: "",
  title: "",
  imageSource: "",
  price: "",
};

export default function AddForm() {
  const { handleAddCard, newCard, setNewCard } = useContext(OrderContext);
  const [isSubmited, setIsSubmited] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const NewCard = {
      ...newCard,
      id: crypto.randomUUID(),
      key: Date.now(),
    };

    handleAddCard(NewCard);

    setNewCard(EMPTY_CARD);
    setIsSubmited(true);

    setTimeout(() => {
      setIsSubmited(false);
    }, 2000);
  };
  // test link to add a card 
  /*
  https://media.auchan.fr/P02000000001KLRPRIMARY_2048x2048/B2CD/
  */
  const inputTexts = getInputTextConfig(newCard); 

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreviou title={newCard.title} imageSource={newCard.imageSource} />
      <div className="inputs-field">
        {inputTexts.map((input) => {
          return (
            <TextInput
              {...input}
              value={newCard[input.name]}
              onChange={handleChange}
              version="admin"
            />
          );
        })}
      </div>
      <SuccessBox isSubmited={isSubmited} /> {/** Button & message success*/}
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  width: 100%;
  padding-top: 5px;

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

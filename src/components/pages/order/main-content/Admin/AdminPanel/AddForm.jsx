import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../../assets/theme";
import TextInput from "../../../../../reusableUI/TextInput";
import SucessButton from "../../../../../reusableUI/MainButton";
import { FiCheck } from "react-icons/fi";

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
  const [isSubmited, setIsSubmited] = useState(false)

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

    setIsSubmited(true)
    setTimeout(() => {
      setIsSubmited(false)
    }
    , 2000)
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-previous">
      { newCard.imageSource ?
       <img   src={newCard.imageSource} alt={newCard.title} /> 
       : <div>Aucune image</div>}
      </div>
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
      <div className="submit-box">
      <SucessButton
        className={"submit-button"}
        label={"Ajouter un nouveau produit au menu"}
        version={"success"}
      />
      <div className="sucess-message">
      { isSubmited && <small className="message"><FiCheck className="icon" /> Ajouté avec succès</small>}
      </div>
      </div>
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
    img {
      width: 100%;
      height: 100%;
    }
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
  .submit-box {
    display: grid;
    grid-area: 4/-2/-1/-1;
    justify-content: left;
    align-items: start; 
    grid-template-columns: 1fr 1fr;
    align-items: start;
    justify-items: start;
    width: 60%;
  .sucess-message {
    margin-left: 5px;
    font-family: "open sans", sans-serif;
    align-items: center;
    display: flex;
    height: 60%;
  .icon {
    color: ${theme.colors.success};
    margin-left: 10px;
    width: 1em;
    height: 1em;
    border: 1px solid ${theme.colors.success};
    border-radius: 50%;
    vertical-align: middle;
  }
  .message {
    margin-left: 5px;
    font-size: ${theme.fonts.size.XS};
    color: ${theme.colors.success};
  }
}
}
  
`;

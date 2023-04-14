import React, { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";

export default function AddForm() {

  const {handleAddCard} = useContext(OrderContext)

  const [title, setTitle] = useState("")
  const [imageSource, setImageSource] = useState("")
  const [price, setPrice] = useState("0")

  const handleChange = (event) => { 
    const {name, value} = event.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "imageSource") {
      setImageSource(value);
    } else if (name === "price") {
      setPrice(value);
    }

   }


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const NewCard = {
      key: Date.now(),
      id: Date.now(),
      title,
      imageSource,
      price,
    }

    handleAddCard(NewCard);


  }

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-previous">Aucune image</div>
      <div className="inputs-field">
        <input type="text" onChange={handleChange} name="title" value={title} placeholder="Nom du produit" />
        <input type="text" onChange={handleChange} name="imageSource" value={imageSource} placeholder="Url " />
        <input type="text" onChange={handleChange} name="price" value={price ? price : ""} placeholder="Prix" />
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

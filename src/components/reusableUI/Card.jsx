import React from "react";
import styled from "styled-components";
import { theme } from "../../assets/theme";
import PrimaryButton from "./PrimaryButton";

export default function Card({ imageSource, leftDescription, title }) {
  return (
    <CardStyled>
      <figcaption>
        <img src={imageSource} height={"100px"} width={"80px"} alt={title} />
      </figcaption>
      <div>
        <h1>{title}</h1>
        {/* arrondir le prix */}
        <p>{leftDescription}</p>
        <PrimaryButton label={"Ajouter"} className="btnCart" />
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.figure`
  background-color: white;
  height: 330px;
  width: auto;
  min-width: 170px;
  border-radius: 10px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  figcaption {
    height: 200px;
    width: 90%;
    object-fit: cover;
    display: flex;
    align-items: center;
    margin: auto;
    img {
      height: 65%;
      width: 80%;
      object-fit: contain;
      margin: auto;
      /* border: 2px solid red; */
    }
  }
  div {
    position: relative;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
    /* border: 2px solid red; */
    h1 {
      width: 95%;
      font-size: ${theme.fonts.size.P4};
      font-weight: ${theme.fonts.weights.heavy};
      font-family: "Amatic SC", cursive;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin: 0;
    }
    p {
      font-size: ${theme.fonts.size.P1};
      font-family: "Open sans", cursive;
      color: ${theme.colors.primary};
    }
    .btnCart {
      width: 100px;
      height: 45px;
      position: absolute;
      top: -55px;
      right: -5px;
    }
  }
`;

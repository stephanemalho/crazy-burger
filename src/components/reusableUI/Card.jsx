import React from "react";
import styled from "styled-components";
import { theme } from "../../assets/theme";
import MainButton from "./MainButton";
import { TiDelete } from "react-icons/ti";

export default function Card({
  imageSource,
  leftDescription,
  title,
  hasDeleteButton,
  onDelete,
}) {
  return (
    <CardStyled>
      {hasDeleteButton && (
        <button className="delete_button" onClick={onDelete}>
          <TiDelete className="icon" />
        </button>
      )}
      <figcaption>
        <img src={imageSource} height={"100px"} width={"80px"} alt={title} />
      </figcaption>
      <div>
        <h1>{title}</h1>
        {/* arrondir le prix */}
        <p>{leftDescription}</p>
        <MainButton label={"Ajouter"} className="btnCart" version="primary" />
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.figure`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: ${theme.spacing.md} auto;
  background-color: ${theme.colors.white};
  height: 330px;
  width: 240px;
  min-width: 200px;
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.medium};
  box-sizing: border-box;
  .delete_button {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 10px;
    right: 10px;
    border-radius: 50%;
    border: none;
    color: #ffa01b;
    background: none;
    padding: 0;
    z-index: 2;
    cursor: pointer;
    .icon {
      height: 100%;
      width: 100%;
    }

    &:hover {
      color: ${theme.colors.red};
    }

    &:active {
      color: ${theme.colors.redSecondary};
    }
  }
  figcaption {
    height: 145px;
    width: 200px;
    object-fit: cover;
    display: flex;
    align-items: center;
    margin: auto;
    padding-top: 50px;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      margin: auto;
      /* border: 2px solid red; */
    }
  }
  div {
    position: relative;
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
    /* border: 2px solid red; */
    h1 {
      width: 95%;
      font-size: ${theme.fonts.size.P4};
      font-weight: ${theme.fonts.weights.bold};
      font-family: "Amatic SC", cursive;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin: 0;
    }
    p {
      font-size: ${theme.fonts.size.P1};
      font-family: "Open sans", cursive;
      color: ${theme.colors.loginLine};
    }
    .btnCart {
      width: 95px;
      height: 38px;
      position: absolute;
      top: -50px;
      right: -15px;
    }
  }
`;

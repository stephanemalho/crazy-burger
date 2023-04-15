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
        <MainButton
          label={"Ajouter"}
          className="btnCart"
          version="primary"
        />
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.figure`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 20px auto;
  background-color: white;
  height: 300px;
  width: 200px;
  min-width: 200px;
  border-radius: 10px;
  box-shadow: ${theme.shadows.medium};
  padding: 20px;
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
    height: 200px;
    width: 90%;
    object-fit: cover;
    display: flex;
    align-items: center;
    margin: auto;
    img {
      height: 65%;
      width: 100%;
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
      color: ${theme.colors.loginLine};
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

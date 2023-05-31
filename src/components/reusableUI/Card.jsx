import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../assets/theme";
import MainButton from "./MainButton";
import { TiDelete } from "react-icons/ti";

export default function Card({
  imageSource,
  leftDescription,
  title,
  hasDeleteButton,
  onDelete,
  onClick,
  isHoverable,
  isSelected,
  onAdd,
}) {

  return (
    <CardStyled
      onClick={onClick}
      isHoverable={isHoverable}
      isSelected={isSelected}
    >
      <div className="card">
        {hasDeleteButton && (
          <button className="delete-button" onClick={onDelete}>
            <TiDelete className="icon" />
          </button>
        )}
        <figcaption>
          <img src={imageSource} height={"100px"} width={"80px"} alt={title} />
        </figcaption>
        <div>
          <h1>{title}</h1>
          {/* arrondir le prix */}
          <p className="description">{leftDescription}</p>
          <MainButton
            label={"Ajouter"}
            className="btnCart"
            version="primary"
            onClick={onAdd}
          />
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.figure`
  width: 240px;
  height: 330px;
  ${(props) => props.isHoverable && hoverableStyle}
  border-radius: ${theme.borderRadius.extraRound};
  margin: 30px auto;
  .card {
    box-sizing: border-box;
    display: flex;
    position: relative;
    flex-direction: column;
    background-color: white;
    height: 330px;
    width: 240px;
    min-width: 200px;
    border-radius: ${theme.borderRadius.extraRound};
    box-shadow: ${theme.shadows.medium};
    padding: 20px;
    .delete-button {
      position: absolute;
      width: 30px;
      height: 30px;
      top: 13px;
      right: 13px;
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
      width: 100%;
      object-fit: cover;
      display: flex;
      align-items: center;
      margin: auto;
      img {
        height: 145px;
        width: 100%;
        object-fit: contain;
        margin: auto;
        /* border: 2px solid red; */
      }
    }
    div {
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: auto;
      /* border: 2px solid red; */
      h1 {
        width: 95%;
        min-height: 50px;
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
        right: 0px;
      }
    }
    ${({ isHoverable, isSelected }) =>
      isHoverable && isSelected && selectedStyle}
  }
`;

const hoverableStyle = css`
  :hover {
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
    box-shadow: ${theme.shadows.orangeHighlight};
    cursor: pointer;
  }
`;

const selectedStyle = css`
  background: ${theme.colors.primary};
  .description {
    color: ${theme.colors.white};
  }
  .btnCart {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    transition: all 200ms ease-out;
    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
      transition: all 200ms ease-out;
    }
    :active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }

    &.is-disabled {
      opacity: 50%;
      cursor: not-allowed;
      z-index: 2;
    }

    &.with-focus {
      border: 1px solid white;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      :hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.white};
      }
      :active {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    }
  }

  .delete-button {
    color: ${theme.colors.white};

    :active {
      color: ${theme.colors.white};
    }
  }
`;

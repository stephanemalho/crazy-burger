import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../assets/theme/index";

function AccesButton() {
  return (
    <AccesButtonStyled>
      <button>
        Accéder à votre espace{" "}
        <span>
          <MdKeyboardArrowRight size={20} />
        </span>
      </button>
    </AccesButtonStyled>
  );
}

const AccesButtonStyled = styled.div`
  {
  display: flex;
  justify-content: center;
  align-items: center;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 340px;
      height: ${theme.spacing.xl};
      margin: ${theme.spacing.md} auto;
      border: none;
      border-radius: 5px;
      background-color: ${theme.colors.primary_burger};
      color: ${theme.colors.white};
      margin-top: 0;
      font-weight: ${theme.weights.bold};
      font-family: "Open Sans", cursive;
        span {
          position: relative;
          top: 3px;
          left: 5px;
          color: ${theme.colors.white};
        }
    &:hover {
      color: ${theme.colors.primary_burger};
      background-color: ${theme.colors.white};
      cursor: pointer;
      border: 3px solid ${theme.colors.primary_burger};
      transition: 0.1s ease-in-out;
      span {
        color: ${theme.colors.primary_burger};
      }
    }
    @media screen and (max-width: 339px) {
      width: 90%;
    }
`;

export default AccesButton;

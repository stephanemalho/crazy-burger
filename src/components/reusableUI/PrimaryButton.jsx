import React from "react";
import styled from "styled-components";
import { theme } from "../../assets/theme/index";

function PrimaryButton({ ButtonIcon, label, className }) {
  return (
    <PrimaryButtonStyled>
      <button className={className}>
        {label}
        <span>{ButtonIcon && ButtonIcon}</span>
      </button>
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fonts.size.P1};
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 340px;
    height: ${theme.spacing.xl};
    margin: ${theme.spacing.md} auto;
    border: none;
    border-radius: 5px;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    margin-top: 0;
    font-weight: ${theme.fonts.weights.bold};
    font-family: "Open Sans", cursive;
    span {
      position: relative;
      top: 3px;
      left: 5px;
      color: ${theme.colors.white};
    }
    &:hover {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.white};
      cursor: pointer;
      border: 1px solid ${theme.colors.primary};
      transition: 0.1s ease-in-out;
      span {
        color: ${theme.colors.primary};
      }
    }
  }
  @media screen and (max-width: 339px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export default PrimaryButton;

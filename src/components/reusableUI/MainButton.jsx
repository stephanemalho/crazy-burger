import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../assets/theme/index";

function MainButton({ ButtonIcon, label, className, onClick, version = "primary" }) {
  return (
    <MainButtonStyled version={version}>
      <button className={className} onClick={onClick}>
        {label}
        <span>{ButtonIcon && ButtonIcon}</span>
      </button>
    </MainButtonStyled>
  );
}

const MainButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fonts.size.P1};
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${theme.fonts.weights.bold};
    font-family: "Open Sans", cursive;
    span {
      position: relative;
      top: 3px;
      left: 5px;
      color: ${theme.colors.white};
    }
  
  }
  @media screen and (max-width: 339px) {
    width: 90%;
    margin: 0 auto;
  }

  ${({ version }) => extraStyle[version]}
`;

const extraStylePrimary = css`
  button {
    width: 340px;
    height: ${theme.spacing.xl};
    margin: ${theme.spacing.md} auto;
    border: none;
    border-radius: 5px;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    margin-top: 0;
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

`;

const extraStyleSucess = css`
  .submit-button {
    color: ${theme.colors.white};
    width: 100%;
    height: 35px;
    background-color: ${theme.colors.success};
    border-radius: ${theme.borderRadius.round};
    border: none;
    font-weight: ${theme.fonts.weights.bold};
    font-size: ${theme.fonts.size.XS};
    padding: 10px 30px 10px 30px;
    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.success};
      border: 1px solid ${theme.colors.success};
    }
    &:active {
      background-color: ${theme.colors.success};
      color: ${theme.colors.white};
      border: none;
    }
  }
`;

const extraStyle = {
  success: extraStyleSucess,
  primary : extraStylePrimary
};

export default MainButton;

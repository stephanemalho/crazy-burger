import React from "react";
import styled from "styled-components";

import { theme } from "../../assets/theme/index";

function Logo({ props, className, onClick }) {
  return (
    <StyledLogo onClick={onClick} className={className}>
      Crazee { props } Burger
    </StyledLogo>
  );
}

const StyledLogo = styled.h1`
    font-size: ${theme.fonts.size.P6};
    color: ${theme.colors.primary_burger};
    font-family: "Amatic SC", cursive;
    text-transform: uppercase;
    transform: scale(1.5);
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    
    img {
      height: 90px;
      width: 140px;
    }
  
  @media screen and (max-width: 600px) {
    transform: scale(1);
    padding-bottom: ${theme.spacing.xxs};
    img {
      height: 60px;
      width: 90px;
      top: 7px;
    }
  }
  @media screen and (max-width: 420px) {
    img {
      display: none;
    }
  }
`;

export default Logo;

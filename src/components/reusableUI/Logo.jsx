import React from "react";
import styled from "styled-components";

import { theme } from "../../assets/theme/index";

function Logo({ props }) {
  return (
    <StyledLogo>
      Crazee { props } Burger
    </StyledLogo>
  );
}

const StyledLogo = styled.h1`
  {
    font-size: ${theme.fonts.P6};
    color: ${theme.colors.primary_burger};
    font-family: "Amatic SC", cursive;
    text-transform: uppercase;
    transform: scale(1.5);
    padding-bottom: ${theme.spacing.md};
    img {
      height: 90px;
      width: 140px;
      position: relative;
      top: 25px;
    }
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

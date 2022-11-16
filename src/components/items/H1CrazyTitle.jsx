import React from "react";
import styled from "styled-components";

import { theme } from "../../assets/theme/index";
import img from "../../assets/images/logo-orange.jpg";

<img src={img} alt="dessin d'un burger" />;

function H1CrazyTitle() {
  return (
    <StyledCrazyTitle>
      crazee <img src={img} alt="dessin d'un burger" /> Burger
    </StyledCrazyTitle>
  );
}

const StyledCrazyTitle = styled.h1`
  {
  font-size: ${theme.fonts.P6};
  color: ${theme.colors.primary_burger};
  font-family: "Amatic SC", cursive;
  text-transform: uppercase;
  transform: scale(1.5);

  img {
    height: 90px;
    width: 140px;
    position: relative;
    top: 25px;
  }

};
@media screen and (max-width: 600px) {
  transform: scale(1);
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

export default H1CrazyTitle;

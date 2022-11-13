import React from "react";
import styled from "styled-components";

import { theme } from "../../assets/theme/index";
import img from "../../assets/images/logo-orange.jpg";

<img src={img} alt="dessin d'un burger" />;

function CrazyTitle() {
  return (
    <StyledCrazyTitle>
      crazee <img src={img} alt="dessin d'un burger" /> Burger
    </StyledCrazyTitle>
  );
}

const StyledCrazyTitle = styled.h1`
  font-size: ${theme.fonts.P6};
  color: ${theme.colors.primary_burger};
  font-family: "Amatic SC", cursive;

  img {
    height: 90px;
    width: 140px;
    position: relative;
    top: 25px;
  }
`;

export default CrazyTitle;

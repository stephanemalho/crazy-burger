import React from "react";
import img from "../../assets/images/logo-orange.jpg";
import styled from "styled-components";

function TitleLogo() {
  return <StyledTitleLogo src={img} alt="dessin d'un burger" />;
}

const StyledTitleLogo = styled.img`
  height: 90px;
  width: 140px;
  position: relative;
  top: 25px;
`;

export default TitleLogo;

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { theme } from "../../../../../assets/theme";
import { dots } from "../../../../../utils/dots";

function OnLoadMenu() {
  const [dotIndex, setDotIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotIndex((prevIndex) => (prevIndex + 1) % dots.length);
    }, 500); // Change la dot toutes les 0.5 secondes

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <OnLoadMenuStyled>
      <TextWrapper>
        Chargement en cours
        <DotAnimation>{dots[dotIndex]}</DotAnimation>
      </TextWrapper>
    </OnLoadMenuStyled>
  );
}

const DotAnimation = styled.span`
  width: 100px;
  animation: 1s ease-in-out infinite;
`;

const OnLoadMenuStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Amatic SC", cursive;
  color: ${theme.colors.greyBlue};
  font-size: ${theme.fonts.size.P4};
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export default OnLoadMenu;

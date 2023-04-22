import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../assets/theme";

export default function EditInfoMessage() {
  return (
    <EditInfoMessageStyled>
      Cliquer sur un produit pour le modifier{" "}
      <span className="live-update"> en temps réel</span>
    </EditInfoMessageStyled>
  );
}

const EditInfoMessageStyled = styled.span`

    font-family: "open sans", sans-serif;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.SM};

  .live-update{
      text-decoration: underline;
  }
  `;
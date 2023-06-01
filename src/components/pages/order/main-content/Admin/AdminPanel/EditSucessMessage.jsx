import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../assets/theme";
import { BsCloudCheck } from "react-icons/bs";

export default function EditSucessMessage() {
  return (
    <EditInfoMessageStyled>
      <BsCloudCheck className="EditSucessIcon"/>{" "}Modifications enregistrées!
    </EditInfoMessageStyled>
  );
}

const EditInfoMessageStyled = styled.span`
    font-family: "open sans", sans-serif;
    color: ${theme.colors.blue};
    font-size: ${theme.fonts.size.SM};
    display: flex;
    align-items: center;
    justify-content: left;
    flex-direction: row;
    .EditSucessIcon {
      color: ${theme.colors.blue};
      font-size: ${theme.fonts.size.MD};
      height: 1.2rem;
      width: 1.2rem;
      padding:0.3rem  0.5rem;
    }
  `;
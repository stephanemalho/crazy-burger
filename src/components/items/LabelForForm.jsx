import React from 'react'
import { BiUserCircle } from "react-icons/bi";
import styled from 'styled-components';
/***********************************/
import { theme } from "../../assets/theme/index";

function LabelForForm({ userName, handleChange }) {
  return (
    <LabelForFormStyled htmlFor="name">
        <b>Connectez vous</b>
        <br />
        <div className="inputBox">
          <BiUserCircle color={theme.colors.greyDark} />
          <input
            value={userName}
            type="text"
            id="name"
            placeholder={"Entrez votre prénom"}
            onChange={handleChange}
            required
          />
        </div>
      </LabelForFormStyled>
  )
}

const LabelForFormStyled = styled.label`
  font-size: ${theme.fonts.P3};
  font_family: "Open Sans", cursive;
  border-top: 3px solid ${theme.colors.primary};
  width: 340px;
  padding-top: ${theme.spacing.lg};
  position: relative;
  .inputBox {
    display: flex;
    padding-left: 10px;
    align-items: center;
    justify-content: left;
    max-width: 340px;
    background: ${theme.colors.white};
    height: ${theme.spacing.xl};
    margin: ${theme.spacing.md} auto;
    border: none;
    border-radius: 5px;
    placeholder {
      color: ${theme.colors.primary};
    } 
    input {
      border: none;
      padding-left: 10px;
      width: 80%;
      :focus {
        outline: solid 1px ${theme.colors.primary};
        border-radius: 5px;
      }
    }
} 
`

export default LabelForForm
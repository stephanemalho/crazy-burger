import React from "react";
import styled from "styled-components";

import { theme } from "../../assets/theme/index";

function TextInput({ Icon, onChange, value, ...extraProps }) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input type="text" onChange={onChange} value={value} {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  display: flex;
  padding-left: 15px;
  align-items: center;
  justify-content: left;
  max-width: 340px;
  background: ${theme.colors.white};
  height: ${theme.spacing.xl};
  margin: ${theme.spacing.md} auto;
  border: none;
  border-radius: 5px;
  .Icon {
    font-size: ${theme.fonts.size.P2};
    color: ${theme.colors.greyMedium};
  }
  input {
    border: none;
    padding-left: 10px;
    width: 80%;
    margin-left: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    :focus {
      outline: solid 1px ${theme.colors.loginLine};
      border-radius: 5px;
    }
  }
  @media screen and (max-width: 339px) {
    width: 90%;
    input {
      :focus {
        width: 70%;
      }
    }
  }
`;

export default TextInput;

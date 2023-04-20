import React from "react";
import styled, { css } from "styled-components";

import { theme } from "../../assets/theme/index";

const TextInput = React.forwardRef(({ Icon, onChange, value, version="login", ...extraProps }, ref) => {
  return (
    <TextInputStyled version={version}>
      {Icon && Icon}
      <input ref={ref} type="text" onChange={onChange} value={value} {...extraProps}  />
    </TextInputStyled>
  );
});


const TextInputStyled = styled.div`
  display: flex;
  padding-left: 15px;
  align-items: center;
  justify-content: left;
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
      border-radius: 5px;
      outline: none;
      caret-color: ${theme.colors.primary};
    }
  }
  @media screen and (max-width: 339px) {
    
    input {
      :focus {
        width: 70%;
      }
    }
  }
  ${({ version }) => extraStyle[version]}
`;

const extraStyleNormal = css`
  background-color: ${theme.colors.background_white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};
  height: 0;
  margin: 0;
  max-width: 80%;

  input {
    color: ${theme.colors.dark};
    background: ${theme.colors.background_white};

    &::placeholder {
      background: ${theme.colors.background_white};
    }
  }
`

const extraStyleLogin = css`
  background-color: ${theme.colors.background_white};
  color: ${theme.colors.greyBlue};
  max-width: 340px;

  input {
    background: ${theme.colors.background_white}; 
    color: ${theme.colors.dark};

    &:focus {
      outline: 0; //// add outline
    }
  }
`

const extraStyle = {
  admin: extraStyleNormal,
  login: extraStyleLogin,
}

export default TextInput;

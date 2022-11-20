import React from 'react'
import styled from 'styled-components'
import { theme } from '../../assets/theme/index'

function TextInput({ Icon, onChange, value, ...extraProps }) {
  return (
    <InputStyled>
        {Icon && Icon}
        <input type="text" onChange={onChange} value={value} {...extraProps} />
    </InputStyled>
  )
}

const InputStyled = styled.div`
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
  .Icon {
    font-size: ${theme.fonts.P3};
    color: ${theme.colors.greyMedium};
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
  @media screen and (max-width: 339px) {
    .inpuBox {
      width: 90%;
  }
`

export default TextInput
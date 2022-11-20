import React from "react";
import styled from "styled-components";
/***********************************/
import { theme } from "../../assets/theme/index";

function LabelForForm({
  htmlFor,
  label,
  Icon,
  onChange,
  value,
  className,
  ...extraProps
}) {
  return (
    <LabelForFormStyled htmlFor={htmlFor}>
      <b>{label}</b>
      <br />
      <div className={className}>
        {Icon && Icon}
        <input onChange={onChange} value={value} {...extraProps} />
      </div>
    </LabelForFormStyled>
  );
}

const LabelForFormStyled = styled.label`
  {
  font-size: ${theme.fonts.P4};
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
  }
  @media screen and (max-width: 339px) {
    width: 90%;
    .inpuBox {
      width: 90%;
    }
  }
`;

export default LabelForForm;

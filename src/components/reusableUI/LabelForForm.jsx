import React from "react";
import styled from "styled-components";
/***********************************/
import { theme } from "../../assets/theme/index";
import Input from "./Input";

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
      <Input Icon={Icon} onChange={onChange} value={value} {...extraProps} />
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
  @media screen and (max-width: 339px) {
    width: 90%;
    .inpuBox {
      width: 90%;
    }
  }
`;

export default LabelForForm;

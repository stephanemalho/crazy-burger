import React from "react";
import styled from "styled-components";
import { theme } from "../../assets/theme";

export default function Tab({label, Icon, onClick, className }) {
  return (
    <TabStyled className={className} onClick={onClick}>
      <div className="Icon">{Icon}</div>
      {label && <span className="label">{label}</span>}
    </TabStyled>
  );
}

const TabStyled = styled.button`
  border: 1px solid red;
  height: 43px;
  padding: 0 22px;

  position: relative;
  left: 5%;
  top: 1px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};

  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};

  border-color: ${theme.colors.greyLight};
  border-width: 1px 1px 2px 1px;
  border-style: solid;

  border-radius: ${theme.borderRadius.round};
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;

  cursor: pointer;

  :hover {
    border-bottom: 2px solid ${theme.colors.white};
    text-decoration: underline;
  }

  .Icon {
    display: flex;
  }
  .label {
    margin-left: 10px;
  }
`;

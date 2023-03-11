import React from "react";
import styled from "styled-components";

import {formatPrice} from "../../utils/maths";
import { fakeMenu2 } from "../../fakeData/fakeMenu";
import Card from "../reusableUI/Card";

function MenuGrid() {
  console.log(fakeMenu2);

  return (
    <MenuGridStyled>
      {fakeMenu2.map((name) => (
        <Card
          key={name.title}
          title={name.title}
          imageSource={name.imageSource}
          leftDescription={formatPrice(name.price)}
        />
      ))}
    </MenuGridStyled>
  );
}

const MenuGridStyled = styled.section`
  width: 100%;
  overflow-x: hidden;
  background: #f5f5f7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  height: auto;
  overflow-y: scroll;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-row-gap: 60px;
  grid-column-gap: 20px;
  z-index: -1;
`;

export default MenuGrid;

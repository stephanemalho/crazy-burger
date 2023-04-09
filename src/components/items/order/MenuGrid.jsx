import React from "react";
import styled from "styled-components";

import { theme } from "../../../assets/theme/index";
import { formatPrice } from "../../../utils/maths";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";
import Card from "../../reusableUI/Card";

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
  background: #f5f5f7;
  box-shadow: ${theme.shadows.strong};
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

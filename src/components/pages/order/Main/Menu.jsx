import React from "react";
import styled from "styled-components";

import { theme } from "../../../../assets/theme/index";
import { formatPrice } from "../../../../utils/maths";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Card from "../../../reusableUI/Card";

function Menu() {
  console.log(fakeMenu2);

  return (
    <MenuGridStyled>
      <div className="cards-container"> 
      {fakeMenu2.map((name) => (
        <Card
          key={name.title}
          title={name.title}
          imageSource={name.imageSource}
          leftDescription={formatPrice(name.price)}
        />
      ))}
      </div>
    </MenuGridStyled>
  );
}

const MenuGridStyled = styled.section`
    position: relative;
    overflow-y: scroll;
    display: grid;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    z-index: 1;
  .cards-container {
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
  }
`;

export default Menu;

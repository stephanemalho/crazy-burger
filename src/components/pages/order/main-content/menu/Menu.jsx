import React, { useContext } from "react";
import styled from "styled-components";

import OrderContext from "../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import Card from "../../../../reusableUI/Card";
import { formatPrice } from "../../../../../utils/maths";
import { theme } from "../../../../../assets/theme";



function Menu() {
  const { menu, isModeAdmin, handleDeleteCard, resetMenu } = useContext(OrderContext);

  console.log("menu", menu);

  if (menu.length === 0) return isModeAdmin ? <EmptyMenuAdmin onReset={resetMenu} /> : <EmptyMenuClient />;

  return (
    <MenuGridStyled>
      <div className="cards-container">
        {menu.map(({ title, id, imageSource, price }) => (
          <Card
            key={id}
            title={title}
            imageSource={imageSource === "" ? "/images/coming-soon.png" : imageSource}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={() => handleDeleteCard(id)}
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
  //border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  z-index: 1;
  overflow-x: hidden;
  width: 100%;
  .cards-container {
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.strong};
    overflow-y: scroll;
    margin: auto;
    padding: 30px 0 50px 0;
    width: 96vw;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-row-gap: 25px;
    grid-column-gap: 10px;
    z-index: -1;
  }
  @media screen and (min-width: 2000px) {
    .cards-container {
      max-width: 2000px;
      height: 100%;
      width: 100%;
    }
  }
`;

export default Menu;
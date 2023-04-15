import React, { useContext } from "react";
import styled from "styled-components";

import { theme } from "../../../../../assets/theme/index";
import { formatPrice } from "../../../../../utils/maths";
import Card from "../../../../reusableUI/Card";
import OrderContext from "../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";

function Menu() {
  const { menu, isModeAdmin, handleDeleteCard } = useContext(OrderContext);

  if (menu.length === 0) return isModeAdmin ? <EmptyMenuAdmin /> : <EmptyMenuClient />;

  return (
    <MenuGridStyled>
      <div className="cards-container">
        {menu.map(({ title, id, imageSource, price }) => (
          <Card
            key={id}
            title={title}
            imageSource={imageSource}
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
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  z-index: 1;
  .cards-container {
    width: 100%;
    background: #f5f5f7;
    box-shadow: ${theme.shadows.strong};
    height: 100%;
    overflow-y: scroll;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-row-gap: 30px;
    grid-column-gap: 20px;
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

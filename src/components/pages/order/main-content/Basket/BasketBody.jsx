import React, { useContext } from "react";
import styled from "styled-components";

import { theme } from "../../../../../assets/theme";

import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";
import OrderContext from "../../../../context/OrderContext";

const defaultImage = "/images/coming-soon.png";

export default function BasketBody() {
  
  const  {basket, handleDeleteBasketProduct} = useContext(OrderContext);

  if (basket.length === 0)
    return (
      <BasketBodyStyled>
        <EmptyBasket />
      </BasketBodyStyled>
    );
  return (
    <BasketBodyStyled>
      <BasketProducts defaultImage={defaultImage} basket={basket} handleDeleteBasketProduct={handleDeleteBasketProduct} />
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.main`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  width: 350px;
`;



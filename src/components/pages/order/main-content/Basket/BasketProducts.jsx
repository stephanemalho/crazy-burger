import React, { useContext } from "react";
import styled from "styled-components";

import { theme } from "../../../../../assets/theme";
import OrderContext from "../../../../context/OrderContext";

import BasketCard from "./BasketCard";
import EmptyBasket from "./EmptyBasket";


const defaultImage = "/images/coming-soon.png";

export default function BasketBody() {
  const { basket, handleDeleteProductFromBasket } = useContext(OrderContext);

  const handleDelete = (item) => {
    handleDeleteProductFromBasket(item);
  };

  if (basket.length === 0)
    return (
      <BasketBodyStyled>
        <EmptyBasket />
      </BasketBodyStyled>
    );
  return (
    <BasketBodyStyled>
      <div className="basket">
        {basket.map((item) => (
          <BasketCard key={item.title} onClick={handleDelete} defaultImage={defaultImage} title={item.title} price={item.price} quantity={item.quantity} imageSource={item.imageSource} 
          />
        ))}
      </div>
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.main`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  width: 350px;
  .basket {
    display: flex;
    flex-direction: column;
    height: calc(95vh - 9vh - 70px - 70px);
    overflow-y: scroll;
    margin: auto;
    box-shadow: ${theme.shadows.strong};
  }
`;



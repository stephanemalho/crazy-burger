import React, { useContext } from "react";
import styled from "styled-components";

import { theme } from "../../../../../assets/theme";
import OrderContext from "../../../../context/OrderContext";

import BasketCard from "./BasketCard";


const defaultImage = "/images/coming-soon.png";

export default function BasketBody() {
  const { basket, handleDeleteProductFromBasket } = useContext(OrderContext);

  const handleDelete = (e) => {
    handleDeleteProductFromBasket(e.target.id);
  };

  if (basket.length === 0)
    return (
      <BasketBodyStyled>
        <div className="empty-message">
          <p>Votre panier est vide</p>
        </div>
      </BasketBodyStyled>
    );
  return (
    <BasketBodyStyled>
      <div className="basket">
        {basket.map((item) => (
          <BasketCard onClick={handleDelete} defaultImage={defaultImage} title={item.title} price={item.price} quantity={item.quantity} imageSource={item.imageSource}/>
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
  .empty-message {
    display: flex;
    height: calc(95vh - 9vh - 70px - 70px);
    text-align: center;
    flex: 1;
    justify-content: center;
    align-items: center;
    align-self: center;
    line-height: 2;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
    box-shadow: ${theme.shadows.strong};
  }
  .basket {
    display: flex;
    flex-direction: column;
    height: calc(95vh - 9vh - 70px - 70px);
    overflow-y: scroll;
    margin: auto;
    box-shadow: ${theme.shadows.strong};
  }
`;



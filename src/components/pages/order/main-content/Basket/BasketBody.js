import React, { useContext } from "react";
import styled from "styled-components";

import { theme } from "../../../../../assets/theme";
import OrderContext from "../../../../context/OrderContext";

export default function BasketBody() {
  const { basket } = useContext(OrderContext);

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
          <div className="basket-item" key={item.id}>
            <div className="basket-item__name">{item.title}</div>
            <div><img src={item.imageSource} alt={item.title} /></div>
            <div className="basket-item__quantity">{item.quantity}</div>
            <div className="basket-item__price">{item.price}</div>
          </div>
        ))}
      </div>
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.main`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};

  .empty-message {
    display: flex;
    height: calc(95vh - 10vh - 70px - 70px);
    text-align: center;
    flex: 1;
    justify-content: center;
    align-items: center;
    align-self: center;
    line-height: 2;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }

  .basket {
    display: flex;
    flex-direction: column;
    height: calc(95vh - 10vh - 70px - 70px);
    overflow-y: scroll;
    padding: 0 20px;
    width: 100%;
    margin : auto;
    .basket-item {
      display: flex;
      justify-content: space-between;

      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;

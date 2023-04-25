import React, { useContext } from "react";
import styled from "styled-components";

import { theme } from "../../../../../assets/theme";
import OrderContext from "../../../../context/OrderContext";
import { formatPrice } from "../../../../../utils/maths";

const defaultImage = "/images/coming-soon.png";

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
          <figure className="basket-item" key={item.id}>
            <figcaption>
              { !item.imageSource ? <img src={defaultImage} alt="arrive bientot" /> : <img src={item.imageSource} alt={item.title} />}
            </figcaption>
            <div className="name-and-price">
            <h4 className="basket-item-title">{item.title}</h4>
            <span className="basket-item-price">{formatPrice(item.price)}</span>
            </div>
            <span className="basket-item-quantity">X {item.quantity}</span>
          </figure>
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

    .basket-item {
      display: flex;
      background: #ffffff;
      box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      width: 90%;
      height: 85px;
      min-height: 85px;
      margin: 10px auto;
      figcaption {
        flex-basis: 40%;
        height: 100%;
        object-fit: cover;
        box-sizing: border-box;
        display: flex;
        margin: 0 5px;
        img {
          height: 50px;
          max-width: 70px;
          margin: auto;
        }
      }
      .name-and-price {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: left;
        .basket-item-title {
          padding: 0;
          margin: 0;
          font-family: ${theme.fonts.family.stylish};
          font-size: ${theme.fonts.size.P3};
          min-width: 100%;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          width: 120px;
        }
        .basket-item-price {
          color : ${theme.colors.primary};
        }
      }
      .basket-item-quantity {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 100%;
        flex-basis: 25%;
        font-family: "Open Sans", sans-serif;
        color: ${theme.colors.primary};
      }
    }
  }
`;

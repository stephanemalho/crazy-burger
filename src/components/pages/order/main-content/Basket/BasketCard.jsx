import React from 'react'
import { formatPrice } from "../../../../../utils/maths";
import MainButton from "../../../../reusableUI/MainButton";
import { MdDeleteForever } from "react-icons/md";
import styled from 'styled-components';
import { theme } from '../../../../../assets/theme';

export default function BasketCard({key, title ,price , quantity, defaultImage, onClick , imageSource}) {
  
  return (
          <BasketCardStyled  key={key}> {/* key={item.title} */}
            <figcaption>
              { !imageSource ? <img src={defaultImage} alt="arrive bientot" /> : <img src={imageSource} alt={title} />}
            </figcaption>
            <div className="name-and-price">
            <h4 className="basket-item-title">{title}</h4>
            <span className="basket-item-price">{formatPrice(price)}</span>
            </div>
            <span className="basket-item-quantity">x {quantity}</span>
            <MainButton version="delete" className="delete"  ButtonIcon={<MdDeleteForever size="25"/>} onClick={onClick} />
          </BasketCardStyled>
  )
}

const BasketCardStyled = styled.figure`
      position: relative;
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
        font-family: "Open Sans", sans-serif;
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
      &:hover {
        .delete {
          display: flex;
          position: absolute;
        }
      }
    


`

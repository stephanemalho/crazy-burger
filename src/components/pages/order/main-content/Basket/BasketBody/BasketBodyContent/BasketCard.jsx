import React from "react";
import { formatPrice } from "../../../../../../../utils/maths";
import MainButton from "../../../../../../reusableUI/MainButton";
import CasinoEffect from "../../../../../../reusableUI/CasinoEffect";
import { MdDeleteForever } from "react-icons/md";
import { BasketCardStyled } from "../../../../../../../styled";

export default function BasketCard({
  title,
  price,
  quantity,
  defaultImage,
  onDelete,
  imageSource,
  isClickable,
  onClick,
  isSelected,
}) {
  return (
    <BasketCardStyled
      isClickable={isClickable}
      onClick={onClick}
      isSelected={isSelected}
    >
      <figcaption>
        {!imageSource ? (
          <img src={defaultImage} alt="arrive bientot" />
        ) : (
          <img src={imageSource} alt={title} />
        )}
      </figcaption>
      <div className="name-and-price">
        <h4 className="basket-item-title">{title}</h4>
        <span className="basket-item-price">{formatPrice(price)}</span>
      </div>
      {/* <span className="basket-item-quantity">x {quantity}</span> */}
      <CasinoEffect className="basket-item-quantity" count={`x ${quantity}`} />
      <MainButton
        version="delete"
        className="delete"
        ButtonIcon={<MdDeleteForever size="25" />}
        onClick={onDelete}
      />
    </BasketCardStyled>
  );
}

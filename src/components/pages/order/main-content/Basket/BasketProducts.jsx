import React, { useContext } from "react";

import BasketCard from "./BasketCard";
import { BasketProductsStyled } from "../../../../../styled";
import OrderContext from "../../../../context/OrderContext";
import { findObjectById } from "../../../../../utils/arrays";
import { checkIsProductSelected } from "../menu/helper";
import { CSSTransition } from "react-transition-group";

function BasketProducts({ defaultImage }) {
  const {
    isModeAdmin,
    userName,
    menu,
    basket,
    handleDeleteBasketProduct,
    handleProductSelected,
    productSelected,
  } = useContext(OrderContext);

  const handleDelete = (event, id) => {
    event.stopPropagation();
    handleDeleteBasketProduct(id, userName);
  };

  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, menu);
        return (
          <CSSTransition 
          classNames="basket-card-transition"
          timeout={500}
          key={menuProduct.id}
          appear={true}
          >
            <BasketCard
              {...menuProduct}
              quantity={basketProduct.quantity}
              onDelete={(event) => handleDelete(event, menuProduct.id)}
              defaultImage={defaultImage}
              isClickable={isModeAdmin}
              isSelected={checkIsProductSelected(
                basketProduct.id,
                productSelected.id
              )}
              onClick={
                isModeAdmin ? () => handleProductSelected(menuProduct.id) : null
              }
            />
          </CSSTransition>
        );
      })}
    </BasketProductsStyled>
  );
}

export default BasketProducts;

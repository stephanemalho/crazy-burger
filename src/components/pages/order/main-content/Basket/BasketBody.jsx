import React, { useContext } from "react";

import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";
import OrderContext from "../../../../context/OrderContext";
import { isEmpty } from "../../../../../utils/arrays";
import { BasketBodyStyled } from "../../../../../styled";
import { defaultImage } from "../../../../../assets/images";

export default function BasketBody() {
  
  const  {basket, handleDeleteBasketProduct} = useContext(OrderContext);

  if (isEmpty(basket))
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




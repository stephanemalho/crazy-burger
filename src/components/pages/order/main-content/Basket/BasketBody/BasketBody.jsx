import React, { useContext } from "react";

import EmptyBasket from "./BasketBodyContent/EmptyBasket";
import BasketProducts from "./BasketBodyContent/BasketProducts";
import OrderContext from "../../../../../context/OrderContext";
import { isEmpty } from "../../../../../../utils/arrays";
import OnLoadBasketBody from "../../../../../loader/OnLoad";
import { BasketBodyStyled } from "../../../../../../styled";
import { defaultImage } from "../../../../../../assets/images";
import { onLoadBasketMessage } from "../../../../../../utils/variables";

export default function BasketBody() {
  const { basket, handleDeleteBasketProduct, menu } = useContext(OrderContext);

  const componentToRender =
    menu === undefined && isEmpty(basket) ? (
      <OnLoadBasketBody label={onLoadBasketMessage} />
    ) : isEmpty(basket) ? (
      <EmptyBasket />
    ) : (
      <BasketProducts
        defaultImage={defaultImage}
        basket={basket}
        handleDeleteBasketProduct={handleDeleteBasketProduct}
      />
    );

  return <BasketBodyStyled>{componentToRender}</BasketBodyStyled>;
}
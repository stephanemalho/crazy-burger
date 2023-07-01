import React from "react";

import { EmptyBasketStyled } from "../../../../../../../styled";
import { basketEmptyMessage } from "../../../../../../../utils/loaderData";

function EmptyBasket() {
  return (
    <EmptyBasketStyled>
      <p>{basketEmptyMessage}</p>
    </EmptyBasketStyled>
  );
}

export default EmptyBasket;

import React from "react";

import { EmptyBasketStyled } from "../../../../../../../styled";
import { basketEmptyMessage } from "../../../../../../../utils/variables";

function EmptyBasket() {
  return (
    <EmptyBasketStyled>
      <p>{basketEmptyMessage}</p>
    </EmptyBasketStyled>
  );
}

export default EmptyBasket;

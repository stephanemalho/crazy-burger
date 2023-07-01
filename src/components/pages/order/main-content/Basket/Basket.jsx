import BasketHeader from "./BasketHeader/BasketHeader";

import BasketBody from "./BasketBody/BasketBody";
import BasketFooter from "./BasketFooter/BasketFooter";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import { BasketStyled } from "../../../../../styled";
import OnLoadBasketBody from "../../../../loader/OnLoad";

export default function Basket() {
  const { basket, menu } = useContext(OrderContext);
  if (menu === undefined)
    return (
      <BasketStyled>
        <BasketHeader />
        <OnLoadBasketBody label={"Chargement du panier"} />
        <BasketFooter />
      </BasketStyled>
    );
  return (
    <BasketStyled>
      <BasketHeader />
      <BasketBody basket={basket} />
      <BasketFooter />
    </BasketStyled>
  );
}

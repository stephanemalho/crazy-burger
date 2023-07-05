import { useContext } from "react";
import BasketHeader from "./BasketHeader/BasketHeader";
import BasketBody from "./BasketBody/BasketBody";
import BasketFooter from "./BasketFooter/BasketFooter";
import OrderContext from "../../../../context/OrderContext";
import { BasketStyled } from "../../../../../styled";

export default function Basket() {
  const { basket } = useContext(OrderContext);
  return (
    <BasketStyled>
      <BasketHeader />
      <BasketBody basket={basket} />
      <BasketFooter />
    </BasketStyled>
  );
}

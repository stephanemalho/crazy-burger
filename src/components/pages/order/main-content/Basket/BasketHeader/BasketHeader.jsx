import { useContext } from "react";

import Header from "../../../../../reusableUI/Header";
import { calculateSumToPay, formatPrice } from "../../../../../../utils/maths";
import OrderContext from "../../../../../context/OrderContext";
import { BasketHeaderStyled } from "../../../../../../styled";
import BasketHeaderHeading from "./BasketHeaderHeading/BasketHeaderHeading";
import CasinoEffect from "../../../../../reusableUI/CasinoEffect";
import { basketHeader } from "../../../../../../utils/variables";

export default function BasketHeader() {
  const { basket, menu } = useContext(OrderContext); // Context ponction on this specifical component
  const sumToPAy = calculateSumToPay(basket, menu);
  return (
    <Header>
      <BasketHeaderStyled>
        <BasketHeaderHeading title={basketHeader} />
        <CasinoEffect count={formatPrice(sumToPAy)}/>
      </BasketHeaderStyled>
    </Header>
  );
}

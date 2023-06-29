import TotalHeader from "./TotalHeader";

import BasketBody from "./BasketBody";
import Footer from "./Footer";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import { BasketStyled } from "../../../../../styled";
import OnLoad from "../../../../loader/OnLoad";

export default function Basket() {
  const { basket, menu } = useContext(OrderContext);
  if ( !menu )
    return (
      <BasketStyled>
        <TotalHeader />
        <OnLoad label={"Chargement du panier"} />
        <Footer />
      </BasketStyled>
    );
  return (
    <BasketStyled>
      <TotalHeader />
      <BasketBody basket={basket}/>
      <Footer />
    </BasketStyled>
  );
}

import styled from "styled-components"
import TotalHeader from "./TotalHeader"

import BasketBody from "./BasketBody"
import Footer from "./Footer"
import { formatPrice } from "../../../../../utils/maths"
import { useContext } from "react"
import OrderContext from "../../../../context/OrderContext"

export default function Basket() {
  
  const { basket } = useContext(OrderContext)
  
  const getTotalPriceOfBasket = () => {
    let totalPrice = 0;
    basket.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice ;
  };
  
  return (
    <BasketStyled>
      <TotalHeader amountToPay={formatPrice(getTotalPriceOfBasket())} />
      <BasketBody basket={basket} />
      <Footer />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 350px;
`
import styled from "styled-components"
import Total from "./Total"

import BasketBody from "./BasketBody"
import Footer from "./Footer"
import { formatPrice } from "../../../../../utils/maths"
import { useContext } from "react"
import OrderContext from "../../../../context/OrderContext"

export default function Basket() {
  
  const { basket } = useContext(OrderContext)

  
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(basket.price)} />
      <BasketBody />
      <Footer />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

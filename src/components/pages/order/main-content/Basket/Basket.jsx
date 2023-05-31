import styled from "styled-components"
import TotalHeader from "./TotalHeader"

import BasketBody from "./BasketBody"
import Footer from "./Footer"
import { useContext } from "react"
import OrderContext from "../../../../context/OrderContext"

export default function Basket() {
  const { basket } = useContext(OrderContext)
  return (
    <BasketStyled>
      <TotalHeader />
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



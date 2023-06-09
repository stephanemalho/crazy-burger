import TotalHeader from "./TotalHeader"

import BasketBody from "./BasketBody"
import Footer from "./Footer"
import { useContext } from "react"
import OrderContext from "../../../../context/OrderContext"
import { BasketStyled } from "../../../../../styled"

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



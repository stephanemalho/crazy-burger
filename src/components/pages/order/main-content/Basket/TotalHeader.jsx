import { useContext } from "react"

import Header from "../../../../reusableUI/Header"
import { calculateSumToPay, formatPrice } from "../../../../../utils/maths"
import OrderContext from "../../../../context/OrderContext"
import { TotalStyled } from "../../../../../styled"

export default function Total() {

  const { basket, menu } = useContext(OrderContext) // Context ponction on this specifical component
  const sumToPAy = calculateSumToPay(basket, menu)

  return (
    <Header>
      <TotalStyled>
        <span className="total">Total</span>
        <span className="amount">{formatPrice(sumToPAy)}</span>
      </TotalStyled>
    </Header>
  )
}

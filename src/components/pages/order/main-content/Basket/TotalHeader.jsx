import styled from "styled-components"
import { theme } from "../../../../../assets/theme"
import Header from "../../../../reusableUI/Header"
import { calculateSumToPay, formatPrice } from "../../../../../utils/maths"
import { useContext } from "react"
import OrderContext from "../../../../context/OrderContext"

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

const TotalStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.primary};
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
`

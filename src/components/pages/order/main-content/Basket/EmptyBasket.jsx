import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../../../assets/theme'

function EmptyBasket() {
  return (
    <EmptyBasketStyled>
      <p>Votre panier est vide</p>
    </EmptyBasketStyled>
  )
}

export default EmptyBasket

const EmptyBasketStyled = styled.div`
    display: flex;
    height: calc(95vh - 9vh - 70px - 70px);
    text-align: center;
    flex: 1;
    justify-content: center;
    align-items: center;
    align-self: center;
    line-height: 2;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
    box-shadow: ${theme.shadows.strong};
`
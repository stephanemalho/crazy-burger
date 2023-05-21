import React, { useContext } from 'react'
import BasketCard from './BasketCard'
import styled from 'styled-components';
import { theme } from '../../../../../assets/theme';
import OrderContext from '../../../../context/OrderContext';
import { findObjectById } from '../../../../../utils/arrays';

function BasketProducts({ defaultImage }) {

  const { isModeAdmin,  menu, basket, handleDeleteBasketProduct } = useContext(OrderContext);

  const handleDelete = (id) => {
    handleDeleteBasketProduct(id)
  }

  return (
    <BasketProductsStyled>
    {basket.map((basketProduct) => {
      const menuProduct = findObjectById(basketProduct.id, menu)
      return (
      <BasketCard 
        {...menuProduct} 
        key={menuProduct.id} 
        quantity={basketProduct.quantity}
        onClick={() => handleDelete(menuProduct.id)} 
        defaultImage={defaultImage}
        isClickable={isModeAdmin}
      />
    )})}
    </BasketProductsStyled>
  )
}

export default BasketProducts

const BasketProductsStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(95vh - 9vh - 70px - 70px);
    overflow-y: scroll;
    margin: auto;
    box-shadow: ${theme.shadows.strong};
`
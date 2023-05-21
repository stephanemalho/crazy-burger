import React, { useContext } from 'react'
import BasketCard from './BasketCard'
import styled from 'styled-components';
import { theme } from '../../../../../assets/theme';
import OrderContext from '../../../../context/OrderContext';

function BasketProducts({basket, defaultImage, handleDeleteBasketProduct}) {

  const { isModeAdmin } = useContext(OrderContext);

  const handleDelete = (id) => {
    handleDeleteBasketProduct(id)
  }

  return (
    <BasketProductsStyled>
    {basket.map((item) => (
      <BasketCard 
        {...item} 
        key={item.title} 
        onClick={() => handleDelete(item.id)} 
        defaultImage={defaultImage}
        isClickable={isModeAdmin}
      />
    ))}
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
import React from 'react'
import BasketCard from './BasketCard'
import styled from 'styled-components';
import { theme } from '../../../../../assets/theme';

function BasketProducts({basket, defaultImage, handleDeleteBasketProduct}) {

  const handleDelete = (id) => {
    handleDeleteBasketProduct(id)
  }

  return (
    <BasketProductsStyled>
    {basket.map((item) => (
      <BasketCard key={item.title} onClick={() => handleDelete(item.id)} defaultImage={defaultImage} title={item.title} price={item.price} quantity={item.quantity} imageSource={item.imageSource} 
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
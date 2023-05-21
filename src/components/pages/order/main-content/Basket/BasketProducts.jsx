import React, { useContext } from 'react'
import BasketCard from './BasketCard'
import OrderContext from '../../../../context/OrderContext';
import styled from 'styled-components';
import { theme } from '../../../../../assets/theme';

function BasketProducts({ defaultImage }) {

  const { basket, handleDeleteProductFromBasket } = useContext(OrderContext);

  const handleDelete = (item) => {
    handleDeleteProductFromBasket(item);
  };

  return (
    <BasketProductsStyled>
    {basket.map((item) => (
      <BasketCard key={item.title} onClick={handleDelete} defaultImage={defaultImage} title={item.title} price={item.price} quantity={item.quantity} imageSource={item.imageSource} 
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
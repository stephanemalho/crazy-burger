import React, { useContext } from 'react'
import BasketCard from './BasketCard'
import styled from 'styled-components';
import { theme } from '../../../../../assets/theme';
import OrderContext from '../../../../context/OrderContext';
import { findObjectById } from '../../../../../utils/arrays';
import { checkIsProductSelected } from '../menu/helper';

function BasketProducts({ defaultImage }) {

  const { isModeAdmin,  menu, basket, handleDeleteBasketProduct , handleProductSelected , productSelected} = useContext(OrderContext);

  const handleDelete = (event, id) => {
    event.stopPropagation()
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
        onDelete={(event) => handleDelete(event, menuProduct.id)} 
        defaultImage={defaultImage}
        isClickable={isModeAdmin}
        isSelected={checkIsProductSelected(basketProduct.id, productSelected.id)}
        onClick={isModeAdmin ? () => handleProductSelected(menuProduct.id) : null}
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
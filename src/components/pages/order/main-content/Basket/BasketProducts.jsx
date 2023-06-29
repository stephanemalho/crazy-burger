import React, { useContext } from 'react'
import BasketCard from './BasketCard'

import { BasketProductsStyled } from '../../../../../styled'
import OrderContext from '../../../../context/OrderContext';
import { findObjectById } from '../../../../../utils/arrays';
import { checkIsProductSelected } from '../menu/helper';
import { useParams } from 'react-router-dom';

function BasketProducts({ defaultImage }) {

  const { isModeAdmin, menu, basket, handleDeleteBasketProduct , handleProductSelected , productSelected} = useContext(OrderContext)
  const username = useParams().userName

  const handleDelete = (event, id) => {
    event.stopPropagation()
    handleDeleteBasketProduct(id, username)
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
import React, { useContext } from 'react'
import HintMessage from './HintMessage'
import OrderContext from '../../../../../context/OrderContext'

export default function EditForm() {

  const { cardSelected } = useContext(OrderContext)
  return (
    <>
    <HintMessage /> 
    <p>{cardSelected.title}</p>
    </>
  )
}

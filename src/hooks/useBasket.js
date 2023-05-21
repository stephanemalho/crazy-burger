import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { deepClone, findObjectById, findIndexById, remove0bjectById } from "../utils/arrays"

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY)

  const handleAddToBasket = (idProductToAdd) => { 
    const basketCopy = deepClone(basket)
    const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy)
    if (productAlreadyInBasket) {
      incrementProductAlreadyInBasket(idProductToAdd, basketCopy)
      return
    }
    createNewBasketProduct(idProductToAdd, basketCopy, setBasket)
  }

  const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy) => {
    const indexOfBasketProductToIncrement = findIndexById(idProductToAdd, basketCopy)
    // increment quantity
    basketCopy[indexOfBasketProductToIncrement].quantity += 1    
    setBasket(basketCopy)
  }

  const createNewBasketProduct = (idProductToAdd, basketCopy, setBasket) => {
    const newBasketProduct = { id: idProductToAdd, quantity: 1 }
    const newBasket = [newBasketProduct, ...basketCopy]
    setBasket(newBasket)
  }

  const handleDeleteBasketProduct = (idBasketProduct) => {
    //copy du state
    const basketCopy = deepClone(basket)
    // manip de la copie state
    const basketUpdated = remove0bjectById(idBasketProduct, basketCopy)
    setBasket(basketUpdated)
  }
  return { basket, handleAddToBasket , handleDeleteBasketProduct}
}



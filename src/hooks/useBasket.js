import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { deepClone, findObjectById, findIndexById, remove0bjectById } from "../utils/arrays"

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY)

  const handleAddToBasket = (productToAdd) => {
    const basketCopy = deepClone(basket)
    const isProductAlreadyInBasket = findObjectById(productToAdd.id, basketCopy) !== undefined

    // Si le produit n'est pas déjà dans le basket
    if (!isProductAlreadyInBasket) {
      createNewProductInBasket(productToAdd, basketCopy, setBasket)
      return
    }
    // Si le produit est déjà dans le basket 
    incrementProductAlreadyInBasket(productToAdd, basketCopy)
  }

  const incrementProductAlreadyInBasket = (productToAdd, basketCopy) => {
    const indexOfBasketProductToIncrement = findIndexById(productToAdd.id, basketCopy)
    basketCopy[indexOfBasketProductToIncrement].quantity += 1
    setBasket(basketCopy)
  }

  const createNewProductInBasket = (productToAdd, basketCopy, setBasket) => {
    const newBasketProduct = {
      ...productToAdd,
      quantity: 1,
    }
    const basketUpdated = [newBasketProduct, ...basketCopy]
    setBasket(basketUpdated)
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
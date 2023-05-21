import { useState } from "react"
import { deepClone, findInArray } from "../utils/arrays";

export const useBasket = () => { 
  const [basket, setBasket] = useState([]);
  
  const handleAddToBasket = (product) => {
    // copy du state
    const basketCopy = deepClone(basket);
    // ajout du produit vérifier si il existe déjà
    const isProductAlreadyInBasket = findInArray(product.id, basketCopy);
    console.log(isProductAlreadyInBasket);
    
    if (!isProductAlreadyInBasket) {
      const newBasketProduct = {
        ...product,
        quantity: 1,
      }
    // ajout du produit dans le panier 
    const basketUptaded = [ newBasketProduct, ...basketCopy ];
    setBasket(basketUptaded);
  }
  return;
}
  return { basket, setBasket , handleAddToBasket }
} 
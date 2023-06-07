import { useState } from "react";

import { deepClone } from "../utils/arrays";
import { fakeMenu2 } from "../fakeData/fakeMenu";
import { addProductToDB } from "../api/products";
//import { updateProduct } from "../api/products";

export const useMenu = () => {
  const [menu, setMenu] = useState(
    JSON.parse(localStorage.getItem("menu")) || fakeMenu2
  );

  const handleAddProduct = (newProduct, name) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = [newProduct, ...menuCopy];
    setMenu(menuUpdated);
    addProductToDB(menuUpdated, name);
  };

  const handleDeleteProduct = (currentProduct) => {
    const menuCopy = deepClone(menu);
    const newMenu = menuCopy.filter((product) => product.id !== currentProduct);
    setMenu(newMenu);
  };

  const handleEditProduct = (currentProduct) => {
    const menuCopy = deepClone(menu);
    const indexOfProductToEdit = menuCopy.findIndex(
      (product) => product.id === currentProduct.id
    );
    menuCopy[indexOfProductToEdit] = currentProduct;
    setMenu(menuCopy);
    //updateProduct(currentProduct.products,);
  };

  const resetMenu = () => {
    setMenu(fakeMenu2);
  };

  return {
    menu,
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    resetMenu,
  };
};

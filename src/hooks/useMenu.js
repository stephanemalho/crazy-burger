import { useState } from "react";
import { deepClone } from "../utils/arrays";
import { fakeMenu2 } from "../fakeData/fakeMenu";
import {
  addProductToDB,
  //getProductsMenu,
  //getProductsMenu,
  //updateProduct,
  //deleteProduct,
} from "../api/products";

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
    const productToDelete = menuCopy.filter(
      (product) => product.id !== currentProduct
    );
    setMenu(productToDelete);
    //deleteProduct(productToDelete);
  };

  const handleEditProduct = (currentProduct) => {
    const menuCopy = deepClone(menu);
    const indexOfProductToEdit = menuCopy.findIndex(
      (product) => product.id === currentProduct.id
    );
    menuCopy[indexOfProductToEdit] = currentProduct;
    setMenu(menuCopy);
    //updateProduct(menuCopy);
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

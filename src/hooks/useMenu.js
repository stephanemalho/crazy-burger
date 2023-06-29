import { useState } from "react";
import { deepClone } from "../utils/arrays";
import { fakeMenu1 } from "../fakeData/fakeMenu";
import { syncBothMenu } from "../api/products";

export const useMenu = () => {
  const [menu, setMenu] = useState([]);

  const handleAddProduct = (newProduct, name) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = [newProduct, ...menuCopy];
    setMenu(menuUpdated);
    try {
      syncBothMenu(menuUpdated, name);
    }
    catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = (currentProduct, userName) => {
    const menuCopy = deepClone(menu);
    const productToDelete = menuCopy.filter(
      (product) => product.id !== currentProduct
    );
    setMenu(productToDelete);
    try {
      syncBothMenu(productToDelete, userName);
    }
    catch (error) {
      console.log(error);
    }
  };

  const handleEditProduct = (currentProduct, userName) => {
    const menuCopy = deepClone(menu);
    const indexOfProductToEdit = menuCopy.findIndex(
      (product) => product.id === currentProduct.id
    );
    menuCopy[indexOfProductToEdit] = currentProduct;
    setMenu(menuCopy);
    try {
      syncBothMenu(menuCopy, userName);
    } catch (error) {
      console.log(error);
    }
  };

  const resetMenu = (userName) => {
    setMenu(fakeMenu1);
    syncBothMenu(fakeMenu1, userName);
  };

  return {
    menu,
    setMenu,
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    resetMenu,
  };
};

import { useState } from "react";

import { deepClone } from "../utils/arrays";
import { fakeMenu2 } from "../fakeData/fakeMenu";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu2);

  const handleAddProduct = (newProduct) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = [newProduct, ...menuCopy];
    setMenu(menuUpdated);
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

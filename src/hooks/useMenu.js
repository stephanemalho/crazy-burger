import { useContext, useState } from "react";
import { deepClone } from "../utils/arrays";
import { fakeMenu2 } from "../fakeData/fakeMenu";
import {
  addProductToDB,
  updateProduct,
  deleteProduct,
} from "../api/products";
import OrderContext from "../components/context/OrderContext";

export const useMenu = () => {

  const [menu, setMenu] = useState(
    JSON.parse(localStorage.getItem("menu")) || []
  );
  const { userName } = useContext(OrderContext)

  const handleAddProduct = (newProduct, name) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = [newProduct, ...menuCopy];
    setMenu(menuUpdated);
    addProductToDB(menuUpdated, name);
  };

  const handleDeleteProduct = (currentProduct, userName) => {
    const menuCopy = deepClone(menu);
    const productToDelete = menuCopy.filter(
      (product) => product.id !== currentProduct
    );
    setMenu(productToDelete);
    deleteProduct(productToDelete, userName);
  };

  const handleEditProduct = (currentProduct, userName ) => {
    const menuCopy = deepClone(menu);
    const indexOfProductToEdit = menuCopy.findIndex(
      (product) => product.id === currentProduct.id
    );
    menuCopy[indexOfProductToEdit] = currentProduct;
    setMenu(menuCopy);
    updateProduct(menuCopy, userName );
  };

  const resetMenu = () => {
    setMenu(fakeMenu2);
    localStorage.setItem("menu", JSON.stringify(fakeMenu2));
    addProductToDB(fakeMenu2, userName);
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

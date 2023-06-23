import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import NavBar from "./navbar/NavBar";
import Main from "./main-content/Main";
import OrderContext from "../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";
import { findObjectById } from "../../../utils/arrays";
import { OrderPageStyled } from "../../../styled";
import { getProductsMenu } from "../../../api/products";

function OrderPage() {
  // state
  const navigate = useNavigate();
  const { userName } = useParams();
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOnEditTab, setIsOnEditTab] = useState(false);
  const [isOnAddTab, setIsOnAddTab] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("add"); // à changer en "add"
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const { basket, handleAddToBasket, handleDeleteBasketProduct } = useBasket();

  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  const {
    menu,
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    resetMenu,
    setMenu,
  } = useMenu(userName); // custom hook

  // comportements
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const menuData = await getProductsMenu(userName);
        if (menuData && menuData.menu) {
          setMenu(menuData.menu);
          localStorage.setItem("menu", JSON.stringify(menuData.menu));
        } else {
          console.log("Menu data is missing or invalid.");
        }
      } catch (error) {
        console.log("Error fetching menu data:", error);
      }
    };
    fetchMenuData();
  }, [userName, setMenu]);

  useEffect(() => {
    const basketData = JSON.stringify(basket);
    localStorage.setItem("basket", basketData);
  }, [basket]);

  const handleProductSelected = async (productSelectedId) => {
    const productSelected = findObjectById(productSelectedId, menu);
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    await setProductSelected(productSelected);
    titleEditRef.current.focus();
  };

  // context
  const orderContextValue = {
    userName,
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    isOnEditTab,
    setIsOnEditTab,
    isOnAddTab,
    setIsOnAddTab,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    setMenu,
    handleAddProduct,
    handleDeleteProduct,
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleEditProduct,
    titleEditRef,
    basket,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
  };

  // affichage
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="gbl-container">
          <NavBar userName={userName} handleLogin={handleLogin} />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

export default OrderPage;

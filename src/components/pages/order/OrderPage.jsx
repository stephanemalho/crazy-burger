import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import NavBar from "./navbar/NavBar";
import Main from "./main-content/Main";
import { theme } from "../../../assets/theme";
import OrderContext from "../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useMenu } from "../../../hooks/useMenu";
import { deepClone } from "../../../utils/arrays";

function OrderPage() {
  // state
  const navigate = useNavigate();
  const { userName } = useParams();
  const [isModeAdmin, setIsModeAdmin] = useState(true); // à changer en false
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOnEditTab, setIsOnEditTab] = useState(false);
  const [isOnAddTab, setIsOnAddTab] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("add"); // à changer en "add"
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [basket, setBasket] = useState([]);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  const {
    menu,
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    resetMenu,
  } = useMenu(); // custom hook

  // comportements
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleAddToBasket = async (id) => {
    const product = menu.find((product) => product.id === id);
    const basketCopy = deepClone(basket);
  
    // si le produit est déjà dans le panier on incrémente la quantité sinon on ajoute un quantité à 1
    const productAlreadyInBasket = basketCopy.find(
      (productInBasket) => productInBasket.id === id
    );
    if (productAlreadyInBasket) {
      productAlreadyInBasket.quantity++;
      // productAlreadyInBasket.price = 
      // productAlreadyInBasket.quantity * product.price
    } else {
      const newProduct = { ...product, quantity: 1, createdAt: Date.now() };
      basketCopy.unshift(newProduct);
    }

    // if the name is empty we add a empty string and if the image is empty we add a default image
    basketCopy.forEach((product) => {
      if (!product.name) {
        product.name = "";
      }
    });
  
    basketCopy.sort((a, b) => b.createdAt - a.createdAt);
  
    console.log("basketCopy", basketCopy);
  
    await setBasket(basketCopy);
  };

  // context
  const orderContextValue = {
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
    setBasket,
    handleAddToBasket,
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

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  z-index: 1;
  .gbl-container {
    position: relative;
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: 0 auto;
    height: 96%;
    width: 96%;
    max-width: 1400px;
    border-radius: ${theme.borderRadius.extraRound};
    box-shadow: ${theme.shadows.strong};
    z-index: 1;
    overflow: hidden;
  }
`;

export default OrderPage;

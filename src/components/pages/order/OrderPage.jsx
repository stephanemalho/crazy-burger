import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import NavBar from "./navbar/NavBar";
import Main from "./main-content/Main";
import { theme } from "../../../assets/theme";
import OrderContext from "../../context/OrderContext";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";

function OrderPage() {
  // state
  const navigate = useNavigate();
  const { userName } = useParams();
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOnEditTab, setIsOnEditTab] = useState(false);
  const [isOnAddTab, setIsOnAddTab] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [menu, setMenu] = useState(fakeMenu2);

  // comportements

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const NewCard = {
    key: Date.now(),
    id: Date.now(),
    title: "New Card",
    imageSource: "https://picsum.photos/200/300",
    price: 0,
  }

  const handleAddCard = () => {
    console.log("handleAddProduct");
    const menuCopy = [...menu];
    const menuUpdated = [NewCard , ...menuCopy];
    setMenu(menuUpdated);
  }

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
    setMenu,
    handleAddCard
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
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: 0 auto;
    height: 96%;
    width: 96%;
    max-width: 1200px;
    border-radius: 10px;
    box-shadow: ${theme.shadows.strong};
    z-index: 1;
    overflow: hidden;
  }
`;

export default OrderPage;

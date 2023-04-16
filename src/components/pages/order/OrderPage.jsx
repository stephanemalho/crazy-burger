import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import NavBar from "./navbar/NavBar";
import Main from "./main-content/Main";
import { theme } from "../../../assets/theme";
import OrderContext from "../../context/OrderContext";
import { fakeMenu1 } from "../../../fakeData/fakeMenu";
import { EMPTY_CARD } from "../../../enums/card";

function OrderPage() {
  // state
  const navigate = useNavigate();
  const { userName } = useParams();
  const [isModeAdmin, setIsModeAdmin] = useState(true); // à changer en false
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOnEditTab, setIsOnEditTab] = useState(false); 
  const [isOnAddTab, setIsOnAddTab] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("edit") // à changer en "add"
  const [menu, setMenu] = useState(fakeMenu1);
  const [newCard, setNewCard] = useState(EMPTY_CARD);
  const [cardSelected, setCardSelected] = useState(EMPTY_CARD)


  // comportements
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleAddCard = (newCard) => {
    const menuCopy = [...menu];
    const menuUpdated = [newCard , ...menuCopy];
    setMenu(menuUpdated);
  }

  const handleDeleteCard = (currentCard) => {
    const menuCopy = [...menu];
    const newMenu = menuCopy.filter((card) => card.id !== currentCard);
    setMenu(newMenu);
  };

  const resetMenu = () => {
    setMenu(fakeMenu1);
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
    handleAddCard,
    handleDeleteCard,
    resetMenu,
    newCard,
    setNewCard,
    cardSelected,
    setCardSelected
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

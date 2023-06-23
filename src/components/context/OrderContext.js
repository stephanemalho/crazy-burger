import { createContext } from "react";

export default createContext({
  userName: "",

  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  isOnEditTab: false,
  setIsOnEditTab: () => {},

  isOnAddTab: false,
  setIsOnAddTab: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {},

  menu: [],
  setMenu: () => {},
  resetMenu: () => {},
  handleAddCard: () => {},
  handleEditCard: () => {},
  handleDeleteCard: () => {},

  newCard: {},
  setNewCard: () => {},

  productSelected:{},
  setProductSelected :() => {},
  handleProductSelected : () => {},

  titleEditRef: {},

  basket : [],
  handleAddToBasket : () => {},
  handleDeleteBasketProduct : () => {},
})
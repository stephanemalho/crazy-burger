import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  isOnEditTab: false,
  setIsOnEditTab: () => {},

  isOnAddTab: false,
  setIsOnAddTab: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {}
})
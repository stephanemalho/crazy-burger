import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import Tab from "../../../../reusableUI/Tab";
import { theme } from "../../../../../assets/theme";
import OrderContext from "../../../../context/OrderContext";
import { getTabConfig } from "./getTabsConfig";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  const selectTab = (tabSelected) => {
    setIsCollapsed(false); // on ouvre le panneau
    setCurrentTabSelected(tabSelected); // on met à jour l'onglet sélectionné
  };

  const tabs = getTabConfig(currentTabSelected, selectTab);

  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map((tab) => (
        <Tab {...tab} key={tab.index} />
      ))}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;

  .is-active {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }

  button {
    margin-left: 1px;
  }
`;

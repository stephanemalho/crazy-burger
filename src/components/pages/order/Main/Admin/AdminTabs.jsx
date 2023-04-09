import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

import Tab from "../../../../reusableUI/Tab";
import { theme } from "../../../../../assets/theme";
import OrderContext from "../../../../context/OrderContext";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    isOnAddTab,
    setIsOnAddTab,
    isOnEditTab,
    setIsOnEditTab,
  } = useContext(OrderContext);

  const handleAddClick = () => {
    setIsCollapsed(false);
    setIsOnAddTab(true);
    setIsOnEditTab(false);
  };
  const handleEditClick = () => {
    setIsCollapsed(false);
    setIsOnEditTab(true);
    setIsOnAddTab(false);
  };

  return (
    <AdminTabsStyled>
      <Tab
        label=""
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      <Tab
        label="Ajouter un produit"
        Icon={<AiOutlinePlus />}
        onClick={handleAddClick}
        className={isOnAddTab ? "is-active" : ""}
      />
      <Tab
        label="Modifier un produit"
        Icon={<MdModeEditOutline />}
        onClick={handleEditClick}
        className={isOnEditTab ? "is-active" : ""}
      />
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

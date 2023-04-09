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

  const selectTab = (tabSelected) => {
    setIsCollapsed(false);

    if (tabSelected === "add") {
      setIsOnAddTab(true);
      setIsOnEditTab(false);
    }
    if (tabSelected === "edit") {
      setIsOnEditTab(true);
      setIsOnAddTab(false);
    }
  };

  const tabConfig = [
    {
      label: "",
      Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
      onClick: () => setIsCollapsed(!isCollapsed),
      className: isCollapsed ? "is-active" : "",
    },
    {
      label: "Ajouter un produit",
      Icon: <AiOutlinePlus />,
      onClick: () => selectTab("add"),
      className: isOnAddTab ? "is-active" : "",
    },
    {
      label: "Modifier un produit",
      Icon: <MdModeEditOutline />,
      onClick: () => selectTab("edit"),
      className: isOnEditTab ? "is-active" : "",
    },
  ];

  return (
    <AdminTabsStyled>
      {tabConfig.map((tab) => (
         <Tab {...tab}
        />
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

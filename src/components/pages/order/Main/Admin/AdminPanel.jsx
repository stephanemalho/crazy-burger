import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../assets/theme";
import OrderContext from "../../../../context/OrderContext";

export default function AdminPanel() {
  const { isOnAddTab, isOnEditTab } = useContext(OrderContext);

  return (
    <AdminTabsStyled>
      {isOnAddTab && <p>Ajouter un produit</p>}
      {isOnEditTab && <p>Modifier un produit</p>}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  height: 250px;
`;

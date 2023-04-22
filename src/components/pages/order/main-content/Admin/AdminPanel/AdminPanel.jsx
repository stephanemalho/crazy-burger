import React, { useContext } from "react";
import styled from "styled-components";

import { theme } from "../../../../../../assets/theme";
import OrderContext from "../../../../../context/OrderContext";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import HintMessage from "./HintMessage";


export default function AdminPanel() {
  const { currentTabSelected , productSelected } = useContext(OrderContext);
 

  return (
    <AdminTabsStyled>
      {currentTabSelected === "add" && <AddForm />}
      {currentTabSelected === "edit" && productSelected.id ? <EditForm /> : <HintMessage /> }
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  height: 250px;
`;

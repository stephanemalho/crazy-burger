import React, { useContext } from "react";

import OrderContext from "../../../../../context/OrderContext";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import HintMessage from "./HintMessage";
import { AdminPanelStyled } from "../../../../../../styled";


export default function AdminPanel() {
  const { currentTabSelected , productSelected } = useContext(OrderContext);
 

  return (
    <AdminPanelStyled>
      {currentTabSelected === "add" && <AddForm />}
      {currentTabSelected === "edit" && productSelected.id ? <EditForm /> : <HintMessage /> }
    </AdminPanelStyled>
  );
}


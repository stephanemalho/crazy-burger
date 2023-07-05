import React, { useContext } from "react";

import OrderContext from "../../../../../context/OrderContext";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import HintMessage from "./HintMessage";
import { AdminPanelStyled } from "../../../../../../styled";

import { formType } from "../../../../../../utils/variables";

export default function AdminPanel() {
  const { currentTabSelected , productSelected } = useContext(OrderContext);
  return (
    <AdminPanelStyled>
      {currentTabSelected === formType.add && <AddForm />}
      {currentTabSelected === formType.edit && productSelected.id ? <EditForm /> : <HintMessage /> }
    </AdminPanelStyled>
  );
}


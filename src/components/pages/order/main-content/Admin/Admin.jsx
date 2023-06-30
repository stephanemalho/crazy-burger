import React, { useContext } from "react";

import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel/AdminPanel";
import OrderContext from "../../../../context/OrderContext";
import { AdminStyled } from "../../../../../styled";

export default function Admin() {
  const { isCollapsed } = useContext(OrderContext);

  return (
    <AdminStyled className="admin">
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
}

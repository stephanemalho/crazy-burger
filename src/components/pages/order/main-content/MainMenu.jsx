import Menu from "./menu/Menu";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../context/OrderContext";

import Basket from "./Basket/Basket";
import { MainMenuStyled } from "../../../../styled";

export default function MainMenu() {
  const { isModeAdmin } = useContext(OrderContext);

  return (
    <MainMenuStyled>
      <Basket />
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainMenuStyled>
  );
}

import Menu from "./menu/Menu";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../context/OrderContext";

import Basket from "./Basket/Basket";
import { MainMenuStyled } from "../../../../styled";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function MainMenu() {
  const { isModeAdmin } = useContext(OrderContext);

  return (
    <MainMenuStyled>
      <Basket />
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && (
          <TransitionGroup classNames="transition-group">
            <CSSTransition appear classNames="admin-rtg" timeout={600}>
              <Admin />
            </CSSTransition>
          </TransitionGroup>
        )}
      </div>
    </MainMenuStyled>
  );
}

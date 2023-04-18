import styled from "styled-components";
import Menu from "./Menu";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../context/OrderContext";

// import Basket from "./Basket";
//import { theme } from "../../../../assets/theme";

export default function Main() {
  const { isModeAdmin } = useContext(OrderContext);

  return (
    <MainStyled>
      {/* <Basket /> */}
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  overflow-y: scroll;
  height: calc(95vh - 10vh);
  flex: 1;
  /* display:grid;
  grid-template-columns: 1fr 3fr; */
  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    height: 100%;
  }
`;

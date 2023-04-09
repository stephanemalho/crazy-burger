import styled from "styled-components";
import Menu from "./Menu";
//import Basket from "./Basket";
//import { theme } from "../../../../assets/theme";

export default function Main() {
  return (
    <MainStyled>
      {/* <Basket /> */}
      <div className="menu-and-admin">
      <Menu />
      <div className="admin">Admin</div>
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  border: 2px solid green;
  overflow-y: scroll;
  display:grid;
  grid-template-columns: 1fr 2fr;
  height: calc(95vh - 10vh);
  flex:1;
  width:96vw;

  .menu-and-admin {
   position: relative;
   overflow-y: hidden;
   display: grid;
   width: 96vw;
  .admin {
    background-color: red;
    height: 240px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
`;

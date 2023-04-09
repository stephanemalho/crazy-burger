import styled from "styled-components";
import Menu from "./Menu";
import Admin from "./admin/Admin";


//import Basket from "./Basket";
//import { theme } from "../../../../assets/theme";

export default function Main() {
  return (
    <MainStyled>
      {/* <Basket /> */}
      <div className="menu-and-admin">
      <Menu />
      <Admin />
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
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

}
`;

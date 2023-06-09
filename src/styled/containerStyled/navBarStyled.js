import styled from "styled-components";
import { theme } from "../../assets/theme";

const NavBarStyled = styled.nav`
  font-family: "Open Sans", sans-serif;
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  height: 10vh;
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  .orderLogo {
    transform: scale(0.5);
    margin: 0 -50px;
  }
  .toggleButton {
    margin-left: auto;
    align-items: center;
  }
  .userBox {
    display: flex;
    flex-direction: row;
    padding-right: 20px;
    div {
      padding-right: 5px;
    }
  }
  .icon {
    font-size: ${theme.fonts.size.P2};
    color: ${theme.colors.greyMedium};
    height: 35px;
    width: 35px;
    margin-right: 10px;
  }
`;

export default NavBarStyled;

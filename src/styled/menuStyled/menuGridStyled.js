import styled from "styled-components";
import { theme } from "../../assets/theme";

const MenuGridStyled = styled.section`
  position: relative;
  overflow-y: scroll;
  display: grid;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  z-index: 1;
  overflow-x: hidden;
  width: 100%;
  .products-container {
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.strong};
    margin: auto;
    padding: 30px;
    width: 95%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-column-gap: 20px;
    grid-row-gap: 0px;
    z-index: -1;
  }
`;

export default MenuGridStyled;

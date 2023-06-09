import styled from "styled-components";
import { theme } from "../../assets/theme";

const BasketProductsStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(95vh - 9vh - 70px - 70px);
  overflow-y: scroll;
  margin: auto;
  box-shadow: ${theme.shadows.strong};
`;

export default BasketProductsStyled;

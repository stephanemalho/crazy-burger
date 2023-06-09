import styled from "styled-components";
import { theme } from "../../assets/theme";

const BasketBodyStyled = styled.main`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  width: 350px;
`;

export default BasketBodyStyled;

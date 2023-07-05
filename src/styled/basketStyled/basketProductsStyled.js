import styled from "styled-components";
import { theme } from "../../assets/theme";
import { TransitionGroup } from "react-transition-group";
import { basketAnimationRTG } from "../rtg-animations/basketRTG/basketProductRTG";

const BasketProductsStyled = styled(TransitionGroup)`
  display: flex;
  flex-direction: column;
  height: calc(95vh - 9vh - 70px - 70px);
  overflow-y: scroll;
  margin: auto;
  box-shadow: ${theme.shadows.strong};
  ${basketAnimationRTG}
`;

export default BasketProductsStyled;

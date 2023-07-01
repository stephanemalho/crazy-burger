import styled from "styled-components";
import { theme } from "../../assets/theme";
import { TransitionGroup } from "react-transition-group";


const BasketProductsStyled = styled(TransitionGroup)`
  display: flex;
  flex-direction: column;
  height: calc(95vh - 9vh - 70px - 70px);
  overflow-y: scroll;
  margin: auto;
  box-shadow: ${theme.shadows.strong};
  .basket-card-transition-appear {
    transform: translateX(+120%);
    opacity: 0%;
  }
  .basket-card-transition-appear-active {
    transition: 0.5s;
    transform: translateX(0%);
    opacity: 100%;
  }
  .basket-card-transition-enter {
    transform: translateX(+120%);
    opacity: 0%;
  }
  .basket-card-transition-enter-active {
    transition: 0.5s;
    transform: translateX(0%);
    opacity: 100%;
  }
  
  .basket-card-transition-exit {
    opacity: 100%;
  }
  .basket-card-transition-exit-active {
    transition: 0.5s;
    opacity: 0%;
    transform: translateX(-100%);
  }
  
  `;


export default BasketProductsStyled;

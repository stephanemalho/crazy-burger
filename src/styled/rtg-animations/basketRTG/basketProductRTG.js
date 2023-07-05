import { css } from "styled-components";

export const basketAnimationRTG= css`
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
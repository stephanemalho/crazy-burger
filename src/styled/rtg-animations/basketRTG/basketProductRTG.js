import { css } from "styled-components";
import { theme } from "../../../assets/theme";

export const basketAnimationRTG= css`
.basket-card-transition-appear {
    ${theme.animations.slideInRight.from};
    ${theme.animations.fadeIn.from};
  }
  .basket-card-transition-appear-active {
    ${theme.animations.transition.medium};
    ${theme.animations.slideInRight.to};
    ${theme.animations.fadeIn.to};
  }
  .basket-card-transition-enter {
    ${theme.animations.slideInRight.from};
    ${theme.animations.fadeIn.from};
  }
  .basket-card-transition-enter-active {
    ${theme.animations.transition.medium};
    ${theme.animations.slideInRight.to};
    ${theme.animations.fadeIn.to};
  }
  
  .basket-card-transition-exit {
    ${theme.animations.fadeOut.from};
  }
  .basket-card-transition-exit-active {
    ${theme.animations.transition.medium};
    ${theme.animations.fadeOut.to};
    ${theme.animations.slideOutLeft.to};
  }
  `;
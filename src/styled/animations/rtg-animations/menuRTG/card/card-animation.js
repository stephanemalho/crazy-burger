import { css } from "styled-components";
import { theme } from "../../../../../assets/theme";

export const CardAnimationRTG = css`
  .card-animation-rtg-enter {
    ${theme.animations.fadeIn.from};
    ${theme.animations.slideInLeft.from};
    &.card-animation-rtg-enter-active {
      ${theme.animations.fadeIn.to};
      ${theme.animations.slideInLeft.to};
      ${theme.animations.transition.fast}
    }
  }

  .card-animation-rtg-exit {
    ${theme.animations.fadeOut.from};
    ${theme.animations.slideOut.from}
    &.card-animation-rtg-exit-active {
      ${theme.animations.fadeOut.to};
      ${theme.animations.transition.fast}
    }
  }
`;
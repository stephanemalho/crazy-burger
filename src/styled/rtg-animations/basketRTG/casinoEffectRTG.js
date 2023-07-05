import { css } from "styled-components";
import { theme } from "../../../assets/theme";

export const casinoEffectRTG = css`
.casino-effect-enter {
    ${theme.animations.slideInBottom.from};
  }
  .casino-effect-enter-active {
    ${theme.animations.slideInBottom.to};
    ${theme.animations.transition.fast};
  }
  .casino-effect-exit {
    ${theme.animations.slideOutTop.from};
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .casino-effect-exit-active {
    ${theme.animations.slideOutTop.to};
    ${theme.animations.transition.fast};
  }
  `;
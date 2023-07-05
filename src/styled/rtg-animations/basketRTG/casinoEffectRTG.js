import { css } from "styled-components";

export const casinoEffectRTG = css`
.casino-effect-enter {
    transform: translateY(100%);
  }
  .casino-effect-enter-active {
    transform: translateY(0%);
    transition: 300ms;
  }
  .casino-effect-exit {
    transform: translateY(0%);
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .casino-effect-exit-active {
    transform: translateY(-100%);
    transition: 300ms;
  }
  `;
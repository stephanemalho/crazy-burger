import { css } from "styled-components";

export const menuRTG = css`
.admin-rtg-appear {
    opacity: 0;
    transform: translateY(100%);
    &.admin-rtg-appear-active {
      opacity: 1;
      transform: translateY(0%);
      transition: all 300ms ease-in;
    }
  }
`;
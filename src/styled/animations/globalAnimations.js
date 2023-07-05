import { keyframes } from "styled-components";

export const fadeInFromRight = keyframes`
  from {
    position: absolute;
    z-index: -1;
    opacity: 0;
    right: -8px;
    top:13px;
  }
  to {
    opacity: 1;
    transform: translateX(0);
    top: 13px;
    right: 13px;
  }
`;


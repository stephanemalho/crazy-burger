import { css } from "styled-components";
import { theme } from "../../../../assets/theme";

export const menuRTG = css`
.admin-rtg-appear {
    ${theme.animations.fadeIn.from};
    ${theme.animations.slideInBottom.from};  
    &.admin-rtg-appear-active {
      ${theme.animations.fadeIn.to};
      ${theme.animations.slideInBottom.to};
      ${theme.animations.transition.all};
    }
  }
`;
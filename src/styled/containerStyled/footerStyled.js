import styled from "styled-components";
import { theme } from "../../assets/theme";

const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background_dark};
  height: 70px;
  span {
    font-size: ${theme.fonts.size.P2};
    font-family: ${theme.fonts.family.stylish};
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.white};
  }
`;

export default FooterStyled;
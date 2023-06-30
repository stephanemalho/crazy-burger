import styled from "styled-components";
import { theme } from "../../assets/theme";

const HintMessageStyled = styled.div`
  display: flex;
  align-items: center;
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P3};
  color: ${theme.colors.greyBlue};
  position: relative;

  top: 80px;
  padding-left: 80px;

  span {
    margin-right: 10px;
  }
`;

export default HintMessageStyled;

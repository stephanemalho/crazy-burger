import styled from "styled-components";
import { theme } from "../../assets/theme";


const OnLoadStyled = styled.div`
  height: 100%;
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Amatic SC", cursive;
  color: ${theme.colors.greyBlue};
  font-size: ${theme.fonts.size.P4};
  div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    span {
      width: 20px;
      animation: 1s ease-in-out infinite;
    }
  }
`;

export default OnLoadStyled;
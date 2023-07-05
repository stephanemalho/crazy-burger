import styled from "styled-components";
import { theme } from "../../assets/theme";

const EmptyMenuStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;

  .title,
  .description {
    text-align: center;
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.greyBlue};
  }

  .title {
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.semiBold};
  }

  .description {
    font-size: ${theme.fonts.size.P4};
    margin-top: 20px;
  }

  .empty-menu-btn {
    margin-top: 30px;
    font-size: ${theme.fonts.size.XS};
    font-family: "Open Sans", cursive;
    width: auto;
    padding: 0 20px;
  }
`;

export default EmptyMenuStyled;

import styled from "styled-components";
import { theme } from "../../../assets/theme";

const ErrorTitleStyled  = styled.div`
  .title,
  .description {
    text-align: center;
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.greyBlue};
  }
  .title {
    font-size: ${theme.fonts.size.P6};
    font-weight: ${theme.fonts.weights.semiBold};
  }
  .description {
    font-size: ${theme.fonts.size.P4};
    margin-top: 20px;
  }
`;

export default ErrorTitleStyled;
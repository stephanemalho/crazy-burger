import styled from "styled-components";
import { theme } from "../../assets/theme";

const EditSuccessMessageStyled = styled.span`
  font-family: "open sans", sans-serif;
  color: ${theme.colors.blue};
  font-size: ${theme.fonts.size.SM};
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: row;
  .EditSucessIcon {
    color: ${theme.colors.blue};
    font-size: ${theme.fonts.size.MD};
    height: 1.2rem;
    width: 1.2rem;
    padding: 0.3rem 0.5rem;
  }
`;

export default EditSuccessMessageStyled;

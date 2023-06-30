import styled from "styled-components";
import { theme } from "../../assets/theme";

const EditInfoMessageStyled = styled.span`
  font-family: "open sans", sans-serif;
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.SM};

  .live-update {
    text-decoration: underline;
  }
`;

export default EditInfoMessageStyled;

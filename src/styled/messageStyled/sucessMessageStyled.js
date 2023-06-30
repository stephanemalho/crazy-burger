import styled from "styled-components";
import { theme } from "../../assets/theme";

const SucessMessageStyled = styled.div`
  margin-right: auto;
  font-family: "open sans", sans-serif;
  align-items: center;
  display: flex;
  height: 100%;
  .icon {
    color: ${theme.colors.success};
    margin-left: 10px;
    width: 1em;
    height: 1em;
    border: 1px solid ${theme.colors.success};
    border-radius: 50%;
    vertical-align: middle;
  }
  .message {
    margin-left: 5px;
    color: ${theme.colors.success};
  }
`;

export default SucessMessageStyled;

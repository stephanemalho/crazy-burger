import styled from "styled-components";
import { theme } from "../../assets/theme";

const UserProfileStyled = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  h2 {
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    padding-left: 5px;
    margin: 0;
    color: ${theme.colors.primary};
    span {
      color: ${theme.colors.greyDark};
    }
  }
  button {
    border-style: none;
    background-color: transparent;
    color: ${theme.colors.greyDark};
    :hover {
      color: ${theme.colors.primary};
      cursor: pointer;
    }
  }
`;

export default UserProfileStyled;

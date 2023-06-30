import styled from "styled-components";
import { theme } from "../../assets/theme";

const LoginFormStyled = styled.form`
  width: 100vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  h2,
  label {
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.white};
    margin: 0 auto;
  }
  h2 {
    font-size: ${theme.fonts.size.P5};
    display: inline-block;
    margin-bottom: 20px;
    width: 60vw;
  }
  label {
    font-size: ${theme.fonts.size.P4};
    border-top: 3px solid ${theme.colors.loginLine};
    width: 340px;
    padding-top: ${theme.spacing.lg};
    position: relative;
  }
  .btnIcon {
    font-size: ${theme.fonts.size.P1};
  }
  @media screen and (max-width: 600px) {
    h2 {
      font-size: ${theme.fonts.size.P4};
    }
  }
  @media screen and (max-width: 339px) {
    width: 90%;
    label {
      width: 90%;
    }
  }
`;

export default LoginFormStyled;

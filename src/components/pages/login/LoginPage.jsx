import React from "react";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import img from "../../../assets/images/burger-background.jpg";

//import {theme} from "../../../assets/theme/index"

const LoginPage = () => {
  // state

  // behavior

  // render
  return (
    <LoginPageStyled>
      <LoginForm />
    </LoginPageStyled>
  ) 
}

const LoginPageStyled = styled.div`

  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: url(${img}) rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
  }
`



export default LoginPage;

import React from "react";

import LoginForm from "./LoginForm";
import Logo from "../../reusableUI/Logo";

import { LoginPageStyled } from "../../../styled";
import { logo } from "../../../assets/images";

const LoginPage = () => {
  // render
  return (
    <LoginPageStyled>
      <Logo props={<img src={logo} alt="dessin d'un burger" />} />
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;

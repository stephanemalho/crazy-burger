import React from "react";

import LoginForm from "./LoginForm";
import Logo from "../../reusableUI/Logo";

import { LoginPageStyled } from "../../../styled";
import { logo } from "../../../assets/images";
import { altLogo } from "../../../utils/variables";

const LoginPage = () => {
  // render
  return (
    <LoginPageStyled>
      <Logo props={<img src={logo} alt={altLogo} />} />
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;

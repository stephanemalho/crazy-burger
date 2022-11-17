import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
/**********************************/
import { theme } from "../../assets/theme/index";
import H1CrazyTitle from "./H1CrazyTitle";
import AccesButton from "./AccesButton";
import LabelForForm from "./LabelForForm";

const LoginForm = () => {
  // state
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  // behavior
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName("");
    navigate(`order/${userName}`);
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  // render
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <H1CrazyTitle />
      <h2>Bienvenue chez vous !</h2>
      <br />
      <LabelForForm
        label={"Connectez vous"}
        value={userName}
        setUserName={setUserName}
        onChange={handleChange}
        htmlFor={"name"}
        id={"name"}
        placeholder={"Entrez votre prénom"}
        color={theme.colors.greyDark}
      />
      <AccesButton />
    </LoginFormStyled>
  );
};

const LoginFormStyled = styled.form`
  {
    height: 100vh;
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
      font-size: ${theme.fonts.P5};
      display: inline-block;
      margin-bottom: 20px;
      width: 60vw;
    }
  }

  @media screen and (max-width: 600px) {
    h2 {
      font-size: ${theme.fonts.P4};
    }
  }
  @media screen and (max-width: 339px) {
    width: 90%;
  }
`;

export default LoginForm;

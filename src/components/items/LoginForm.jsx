import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";

/**********************************/
import { theme } from "../../assets/theme/index";
import PrimaryButton from "../reusableUI/PrimaryButton";
import TextInput from "../reusableUI/TextInput";

const LoginForm = ({ Icon, onChange, value, ...extraProps }) => {
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
      <h2>Bienvenue chez vous !</h2>
      <br />
      <label htmlFor="name">
        <b>Connectez - Vous</b>
        <br />
        <TextInput
          id="name"
          type="text"
          Icon={<BiUserCircle className="Icon" />}
          onChange={handleChange}
          value={userName}
          placeholder={"Entrez votre prénom"}
          required
        />
      </label>
      <PrimaryButton
        className={"btnIcon"}
        label={"Accéder à mon espace"}
        ButtonIcon={<MdKeyboardArrowRight />}
      />
    </LoginFormStyled>
  );
};

const LoginFormStyled = styled.form`
  {
    width: 100vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    h2 , label {
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
    label {
      font-size: ${theme.fonts.P4};
      border-top: 3px solid ${theme.colors.primary};
      width: 340px;
      padding-top: ${theme.spacing.lg};
      position: relative;
  }
  @media screen and (max-width: 600px) {
    h2 {
      font-size: ${theme.fonts.P4};
    }
  }
  @media screen and (max-width: 339px) {
    width: 90%;
    label {
      width: 90%;
    }
  }
`;

export default LoginForm;

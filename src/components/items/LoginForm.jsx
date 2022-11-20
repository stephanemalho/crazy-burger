import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";

/**********************************/
import { theme } from "../../assets/theme/index";
import H1CrazyTitle from "../reusableUI/H1CrazyTitle";
import AccesButton from "../reusableUI/AccesButton";
import LabelForForm from "../reusableUI/LabelForForm";
import img from "../../assets/images/logo-orange.jpg";

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
      <H1CrazyTitle leftTitle={"Crazee"} img={<img src={img} alt="dessin d'un burger" />} rightTitle={"Title"} />
      <h2>Bienvenue chez vous !</h2>
      <br />
      <LabelForForm
        className={"inputBox"}
        htmlFor={"name"}
        label={"Connectez vous"}
        Icon={<BiUserCircle className="Icon" />}
        value={userName}
        onChange={handleChange}
        setUserName={setUserName}
        type={"text"}
        id={"name"}
        placeholder={"Entrez votre prénom"}
        required
      />
      <AccesButton label={"Accéder à votre espace"} ButtonIcon={<MdKeyboardArrowRight className="Btn-Icon" />} />
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
    .Btn-Icon {
      font-size: ${theme.fonts.P2};
      color: ${theme.colors.white};
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

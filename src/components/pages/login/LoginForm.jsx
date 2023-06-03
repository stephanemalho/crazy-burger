import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";

/**********************************/
import { theme } from "../../../assets/theme/index";
import MainButton from "../../reusableUI/MainButton";
import TextInput from "../../reusableUI/TextInput";
import { createUser, getUser } from "../../../api/users";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  // behavior
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await getUser(userName);
    if (!user) {
      await createUser(userName, fakeMenu2);
    }
    const userMenu = await getUser(userName);

    setUserName("");
    navigate(`order/${userName}`, { state: { menu: userMenu } });
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
        <b>Connectez - vous</b>
        <br />
        <TextInput
          id="name"
          type="text"
          Icon={<BsPersonCircle className="Icon" />}
          onChange={handleChange}
          value={userName}
          placeholder={"Entrez votre prénom"}
          required
          version="login"
        />
      </label>
      <MainButton
        className={"btnIcon"}
        label={"Accéder à mon espace"}
        ButtonIcon={<MdKeyboardArrowRight size={30} />}
      />
    </LoginFormStyled>
  );
};

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

export default LoginForm;

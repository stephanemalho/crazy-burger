import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BiUserCircle } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";

import { theme } from "../../../assets/theme/index";
import CrazyTitle from "../../items/CrazyTitle";

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
      <CrazyTitle />
      <h2>Bienvenue chez vous !</h2>
      <br />
      <label htmlFor="name">
        <b>Connectez vous</b>
        <br />
        <div className="inputBox">
          <BiUserCircle color={theme.colors.greyDark} />
          <input
            value={userName}
            type="text"
            id="name"
            placeholder={"Entrez votre prénom"}
            onChange={handleChange}
            required
          />
        </div>
      </label>
      <div className="buttonBox">
        <button>
          Accéder à votre espace <span><MdKeyboardArrowRight size={20}/></span>
        </button>
      </div>
    </LoginFormStyled>
  );
};

const LoginFormStyled = styled.form`
  
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  h2, label {
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.white};
  }

  h2 {
    font-size: ${theme.fonts.P4};
    display: inline-block;
    width: 60vw;
    margin: 0 auto;
    
  }

  label {
    font-size: ${theme.fonts.P3};
    font_family: "Open Sans", cursive;
    border-top: 3px solid ${theme.colors.primary};
    width: 340px;
    margin: 0 auto;
    padding-top: ${theme.spacing.lg};
    position: relative;
  }

  .inputBox {
    display: flex;
    padding-left: 10px;
    align-items: center;
    justify-content: left;
    max-width: 340px;
    background: ${theme.colors.white};
    height: ${theme.spacing.xl};
    margin: ${theme.spacing.md} auto;
    border: none;
    border-radius: 5px;
    placeholder {
      color: ${theme.colors.primary};
    } 
    input {
      border: none;
      padding-left: 10px;
      width: 80%;
      :focus {
        outline: solid 1px ${theme.colors.primary};
        border-radius: 5px;
      }
    }
  }
  .buttonBox {
    display: flex;
    justify-content: center;
    align-items: center;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 340px;
        height: ${theme.spacing.xl};
        margin: ${theme.spacing.md} auto;
        border: none;
        border-radius: 5px;
        background-color: ${theme.colors.primary_burger};
        color: ${theme.colors.white};
        margin-top: 0;
        font-weight: ${theme.weights.bold};
        font-family: "Open Sans", cursive;
          span {
            position: relative;
            top: 3px;
            left: 5px;
            color: ${theme.colors.white};
          }
      &:hover {
        color: ${theme.colors.primary_burger};
        background-color: ${theme.colors.white};
        cursor: pointer;
        border: 3px solid ${theme.colors.primary_burger};
        transition: 0.1s ease-in-out;
        span {
          color: ${theme.colors.primary_burger};
        }
    }
   
  }
}
`;

export default LoginForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";

/**********************************/
import MainButton from "../../reusableUI/MainButton";
import TextInput from "../../reusableUI/TextInput";
import { authenticateUser } from "../../../api/users";
import { LoginFormStyled } from "../../../styled";
import { loginMessage } from "../../../utils/variables";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  // behavior
  const handleSubmit = async (e) => {
    e.preventDefault();

    await authenticateUser(username);
    setUsername("");
    navigate(`order/${username}`);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
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
          value={username}
          placeholder={loginMessage.firstName}
          required
          version="login"
        />
      </label>
      <MainButton
        className={"btnIcon"}
        label={loginMessage.accesButton}
        ButtonIcon={<MdKeyboardArrowRight size={30} />}
      />
    </LoginFormStyled>
  );
};

export default LoginForm;

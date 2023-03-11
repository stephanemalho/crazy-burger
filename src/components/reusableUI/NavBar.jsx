import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
//import { FaUserSecret } from "react-icons/fa";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LogoImg from "../../assets/images/logo-orange.jpg";
import { theme } from "../../assets/theme";
import Logo from "./Logo";
import ToggleButton from "./ToggleButton";
import UserProfile from "./UserProfile";

function NavBar({ userName, handleLogin }) {
  const [isModeAdmin, setIsModeAdmin] = useState(false);

  const displayNotification = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        //icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsModeAdmin(!isModeAdmin);
  };

  return (
    <NavBarStyled>
      <Logo
        props={<img src={LogoImg} alt="dessin d'un burger" />}
        onClick={() => {
          window.location.reload();
        }}
        className={"orderLogo"}
      />
      <ToggleButton
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DESECTIVER LE MODE ADMIN"
        className={"toggleButton"}
        onToggle={displayNotification}
      />
      <UserProfile
        sayHi={"Hey,"}
        label={"se deconnecter"}
        userName={userName}
        onClick={handleLogin}
        className={"userBox"}
        Icon={<BsPersonCircle className="icon" />}
      />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  font-family: "Open Sans", sans-serif;
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  height: 80px;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 10px 35px -10px grey;
  .orderLogo {
    transform: scale(0.5);
    top: -60px;
    position: absolute;
    left: -60px;
  }
  .toggleButton {
    margin-left: auto;
    align-items: center;
  }
  .userBox {
    display: flex;
    flex-direction: row;
    width: auto;
    div {
      padding-right: 5px;
    }
  }
  .icon {
    font-size: ${theme.fonts.size.P2};
    color: ${theme.colors.greyMedium};
    height: 35px;
    width: 35px;
    margin-right: 10px;
  }
  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
export default NavBar;

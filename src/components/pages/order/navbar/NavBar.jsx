import React, { useContext } from "react";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
import { toast } from "react-toastify";

import LogoImg from "../../../../assets/images/logo-orange.jpg";
import { theme } from "../../../../assets/theme";
import Logo from "../../../reusableUI/Logo";
import ToggleButton from "../../../reusableUI/ToggleButton";
import UserProfile from "./Profile";
import ToastAdmin from "./ToastAdmin";
import OrderContext from "../../../context/OrderContext";

function NavBar({ userName, handleLogin }) {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);

  const activer = "ACTIVER LE MODE ADMIN";
  const desactiver = "DESECTIVER LE MODE ADMIN";

  const displayNotification = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
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
        isChecked={isModeAdmin}
        labelIfUnchecked={activer}
        labelIfChecked={desactiver}
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
      <ToastAdmin />
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
  height: 10vh;
  border-radius: 10px 10px 0 0;
  box-shadow: ${theme.shadows.subtle};
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
`;
export default NavBar;

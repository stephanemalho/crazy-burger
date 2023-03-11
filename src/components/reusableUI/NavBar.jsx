import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import styled from 'styled-components';

import LogoImg from "../../assets/images/logo-orange.jpg";
import { theme } from '../../assets/theme';
import Logo from './Logo'
import ToggleButton from './ToggleButton';
import UserProfile from './UserProfile'

function NavBar({ userName , handleLogin }) {
  return (
    <NavBarStyled>
    <Logo
      props={<img src={LogoImg} alt="dessin d'un burger" />}
      onClick={() => {window.location.reload()}}
      className={"orderLogo"}
    />
    <ToggleButton labelIfUnchecked='ACTIVER LE MODE ADMIN' labelIfChecked='DESECTIVER LE MODE ADMIN' className={"toggleButton"}/>
    <UserProfile sayHi={"Hey,"} label={"se deconnecter"} userName={userName} onClick={handleLogin} className={"userBox"} Icon={<BsPersonCircle className="icon" />}/>
    </NavBarStyled>
  )
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

`
export default NavBar




import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import styled from 'styled-components';

import LogoImg from "../../assets/images/logo-orange.jpg";
import { theme } from '../../assets/theme';
import Logo from './Logo'
import UserProfile from './UserProfile'

function NavBar({ userName , handleLogin }) {
  return (
    <NavBarStyled>
    <Logo
      props={<img src={LogoImg} alt="dessin d'un burger" />}
      onClick={() => {window.location.reload()}}
      className={"orderLogo"}
    />
    <UserProfile userName={userName} onClick={handleLogin} className={"userBox"} Icon={<BsPersonCircle className="icon" />}/>
    </NavBarStyled>
  )
}

const NavBarStyled = styled.nav`
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
    top: -50px;
    position: absolute;
    left: -50px; 
  }
  .userBox {
    display: flex;
    flex-direction: row;
    margin-left: auto;
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




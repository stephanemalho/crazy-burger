import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";

import Logo from "../../reusableUI/Logo";
import LogoImg from "../../../assets/images/logo-orange.jpg";
import { theme } from "../../../assets/theme/index";
import UserProfile from "../../reusableUI/UserProfile";

function OrderPage() {
  const navigate = useNavigate();
  const { userName } = useParams();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <OrderPageStyled>
      <main>
        <nav>
            <Logo
              props={<img onClick={() => {window.location.reload()}} src={LogoImg} alt="dessin d'un burger" />}
              className={"orderLogo"}
            />
            <UserProfile userName={userName} onClick={handleLogin} className={"userBox"} Icon={<BsPersonCircle className="icon" />}/>
        </nav>
      </main>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background-color: #ff9f1a;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  main {
    position: relative;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: 0 auto;
    height: 96%;
    width: 96%;
    border-radius: 10px;
    box-shadow: 0px 0px 16px 0px grey inset;
    nav {
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
      }
      .icon {
        font-size: ${theme.fonts.P2};
        color: ${theme.colors.greyMedium};
        height: 35px;
        width: 35px;
        margin-right: 10px;
      }
    }
  }

    @media screen and (min-width: 1000px) {
        main {
          max-width: 1000px;
          display: flex;
          flex-direction: column;
          align-content: center;
        }
    }
`;

export default OrderPage;

import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";

import Logo from "../../reusableUI/Logo";
import LogoImg from "../../../assets/images/logo-orange.jpg";
import { theme } from "../../../assets/theme/index";

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
        {/** If we need navbar into another page, I will create a self component */}
        <nav>
          <Link to="/">
            <Logo
              props={<img src={LogoImg} alt="dessin d'un burger" />}
              className={"orderLogo"}
            />
          </Link>
          <div className="ctaBox">
            <div>
              <h2>
                <span>Hey,</span> {userName}
              </h2>
              <button onClick={handleLogin}>Se déconnecter</button>
            </div>
            <BsPersonCircle className="icon" />
          </div>
        </nav>
      </main>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background-color: #ff9f1a;
  position: absolute;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  main {
    position: fixed;
    background-color: #fff;
    top: 2%;
    left: 2%;
    width: 96%;
    margin: 0 auto;
    height: 96%;
    border-radius: 10px;
    box-shadow: 0px 0px 16px 0px grey inset;
    nav {
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: end;
      height: 80px;
      border-radius: 10px 10px 0 0;
      box-shadow: 0 10px 35px -10px grey;
      .ctaBox {
        width: 200px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin-right: 50px;
        h2 {
          font-family: "Open Sans", sans-serif;
          font-size: 1rem;
          padding-left: 5px;
          color: ${theme.colors.primary_burger};
          span {
            color: ${theme.colors.greyDark};
          }
        }
        button {
          border-style: none;
          background-color: transparent;
          color: ${theme.colors.greyDark};
          :hover {
            color: ${theme.colors.primary_burger};
            border-bottom: 1px solid ${theme.colors.primary_burger};
            cursor: pointer;
          }
        }
      }
      @media screen and (max-width: 600px) {
        .ctaBox {
        width: auto;
        .icon {
          right: 15px;
        }
    }
    }
    }
  }
  .orderLogo {
    transform: scale(0.5);
    position: absolute;
    top: -75px;
    left: -75px;  
  }
  .icon {
    font-size: ${theme.fonts.P2};
    color: ${theme.colors.greyMedium};
    height: 35px;
    width: 35px;
    position: absolute;
    right: 50px;
    top: 25px;
  }

  

  @media screen and (max-width: 600px) {
    .orderLogo {
    top: -50px;
    left: -50px;
    }
  }

  @media screen and (min-width: 1000px) {
      main {
        position: relative;
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
      }
  }
}

}
  
`;

export default OrderPage;

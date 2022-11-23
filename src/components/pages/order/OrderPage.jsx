import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import NavBar from "../../reusableUI/NavBar";

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
        <NavBar userName={userName} handleLogin={handleLogin} />
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

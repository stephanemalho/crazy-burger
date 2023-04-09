import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import NavBar from "../../../components/items/navbar/NavBar";
import MenuGrid from "../../items/MenuGrid";
import { theme } from "../../../assets/theme";
import AdminPanel from "../../items/adminPanel/AdminPanel";

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
        <MenuGrid />
        <AdminPanel />
      </main>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  z-index: 1;
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
    box-shadow: ${theme.shadows.strong};
    z-index: 1;
    overflow: hidden;
  }

  @media screen and (min-width: 2000px) {
    main {
      max-width: 2000px;
      display: flex;
      flex-direction: column;
      align-content: center;
    }
  }
`;

export default OrderPage;

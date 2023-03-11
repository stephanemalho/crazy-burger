import React from "react";
import styled from "styled-components";

import { theme } from "../../assets/theme";
import { fakeMenu2 } from "../../fakeData/fakeMenu";
import PrimaryButton from "../reusableUI/PrimaryButton";

function MenuGrid() {
  console.log(fakeMenu2);

  const PriceToDecimal = (price) => {
    let decimal = Math.floor(price * 10) / 10;
    return decimal.toFixed(2);
  };

  return (
    <MenuGridStyled>
      {fakeMenu2.map((name, item) => (
        <figure key={name.title} id={name.id} {...item}>
          <figcaption>
            <img
              src={name.imageSource}
              height={"100px"}
              width={"80px"}
              alt={name.title}
            />
          </figcaption>
          <div>
            <h1>{name.title}</h1>
            {/* arrondir le prix */}
            <p>{PriceToDecimal(name.price) + "€"}</p>
            <PrimaryButton label={"Ajouter"} className="btnCart" />
          </div>
        </figure>
      ))}
    </MenuGridStyled>
  );
}

const MenuGridStyled = styled.section`
  width: 100%;
  overflow-x: hidden;
  background: #F5F5F7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  height: auto;
  overflow-y: scroll;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-row-gap: 60px;
  grid-column-gap: 20px;
  z-index: -1;
  figure {
    background-color: white;
    height: 330px;
    width: auto;
    min-width: 170px;
    border-radius: 10px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    figcaption {
      height: 200px;
      width: 90%;
      object-fit: cover;
      display: flex;
      align-items: center;
      margin: auto;
      img {
        height: 65%;
        width: 80%;
        object-fit: contain;
        margin: auto;
        /* border: 2px solid red; */
      }
    }
    div {
      position: relative;
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: auto;
      /* border: 2px solid red; */
      h1 {
        width: 95%;
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.heavy};
        font-family: "Amatic SC", cursive;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin: 0;
      }
      p {
        font-size: ${theme.fonts.size.P1};
        font-family: "Open sans", cursive;
        color: ${theme.colors.primary};
      }
      .btnCart {
        width: 100px;
        height: 45px;
        position: absolute;
        top: -55px;
        right: -5px;
      }
    }
  }
`;

export default MenuGrid;

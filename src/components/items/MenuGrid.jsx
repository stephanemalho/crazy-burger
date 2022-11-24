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
              height="100px"
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
  width: 90%;
  height: auto;
  overflow-y: scroll;
  min-height: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 0px 20px;
  z-index: -1;

  figure {
    background-color: white;
    height: 330px;
    width: 240px;
    border-radius: 10px;
    box-shadow: 0 10px 35px -10px grey;
    figcaption {
      height: 200px;
      width: 90%;
      object-fit: cover;
      display: flex;
      align-items: center;
      margin: auto;
      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }
    div {
      position: relative;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: auto;
      h1 {
        width: 90%;
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
        width: 80px;
        position: absolute;
        top: -50px;
        right: -10px;
      }
    }
  }
`;

export default MenuGrid;

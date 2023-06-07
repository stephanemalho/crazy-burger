import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import OrderContext from "../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import OnLoadMenu from "./OnLoadMenu";
import Card from "../../../../reusableUI/Card";
import { formatPrice } from "../../../../../utils/maths";
import { theme } from "../../../../../assets/theme";
import { checkIsProductSelected } from "./helper";
import { EMPTY_PRODUCT } from "../../../../../enums/product";
import { isEmpty } from "../../../../../utils/arrays";
import { defaultImage } from "../../../../../assets/images";

function Menu() {
  const {
    menu,
    isModeAdmin,
    handleDeleteProduct,
    handleAddToBasket,
    resetMenu,
    setProductSelected,
    productSelected,
    handleDeleteBasketProduct,
    handleProductSelected
  } = useContext(OrderContext);

  const [isLoading, setIsLoading] = useState(true);

  console.log("haut dessus de useEffect", isLoading);

  useEffect(() => {
    menu.lenght === 0 && setIsLoading(true);
    console.log("LOading dans le UseEffect ", isLoading);
    setTimeout(() => {
      setIsLoading(false);
      console.log("LOading dans le setTime out du UseEffect ", isLoading);
    }, 4000);
  }, [ menu, isLoading ]);

  console.log("en dessous de useEffect", isLoading);


  const handleProductDelete = (event, idProductToDelete) => {
    event.stopPropagation()
    console.log("idProductToDelete", idProductToDelete);
    handleDeleteProduct(idProductToDelete)
    handleDeleteBasketProduct(idProductToDelete)
    idProductToDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT)
  };

  const handleAddProducts = (event, idProductToAdd) => {
    event.stopPropagation();
    handleAddToBasket(idProductToAdd);
  };

  // Affichage
  if (isEmpty(menu) || (isLoading && isEmpty)) {
    return isLoading ? <OnLoadMenu /> : (isModeAdmin ? <EmptyMenuAdmin onReset={resetMenu} /> : <EmptyMenuClient />);
  }

  return (
    <MenuGridStyled>
      <div className="products-container">
        {menu.map(({ title, id, imageSource, price }) => (
          <Card
            key={id}
            title={title}
            imageSource={imageSource === "" ? defaultImage : imageSource}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={(event) => handleProductDelete(event, id)}
            onClick={isModeAdmin ? () => handleProductSelected(id) : null}
            isHoverable={isModeAdmin}
            isSelected={checkIsProductSelected(id, productSelected.id)}
            onAdd={(event) => handleAddProducts(event, id)}
          />
        ))}
      </div>
    </MenuGridStyled>
  );
}

const MenuGridStyled = styled.section`
  position: relative;
  overflow-y: scroll;
  display: grid;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  z-index: 1;
  overflow-x: hidden;
  width: 100%;
  .products-container {
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.strong};
    margin: auto;
    padding: 30px;
    width: 95%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-column-gap: 20px;
    grid-row-gap: 0px;
    z-index: -1;
  }
`;

export default Menu;

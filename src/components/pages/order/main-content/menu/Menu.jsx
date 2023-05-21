import React, { useContext } from "react";
import styled from "styled-components";

import OrderContext from "../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import Card from "../../../../reusableUI/Card";
import { formatPrice } from "../../../../../utils/maths";
import { theme } from "../../../../../assets/theme";
import { checkIsProductSelected } from "./helper";
// import { EMPTY_PRODUCT } from "../../../../../enums/product";
// import { useBasket } from "../../../../../hooks/useBasket";
import { findInArray } from "../../../../../utils/arrays";

function Menu() {
  const {
    menu,
    isModeAdmin,
    //handleDeleteProduct,
    handleAddToBasket,
    resetMenu,
    setProductSelected,
    productSelected,
    setIsCollapsed,
    setCurrentTabSelected,
    titleEditRef,
  } = useContext(OrderContext);

  const defaultImage = "/images/coming-soon.png";

  const handleClickProduct = async (productSelectedId) => {
    if (!isModeAdmin) return;

    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");

    const productSelected = findInArray(productSelectedId, menu);
    await setProductSelected(productSelected);

    titleEditRef.current.focus();
  };

  const handleProductDelete = (event,productToDeleteId) => {
    // event.stopPropagation();
    // handleDeleteProduct(productToDeleteId);
    // productToDeleteId === productSelected.id && setProductSelected(EMPTY_PRODUCT);
    // const productToDeleteInBasket = basket.find(  
    //   (product) => product.id === productToDeleteId
    // );
    // if (productToDeleteInBasket) {
    //   const basketCopy = [...basket];
    //   const index = basketCopy.indexOf(productToDeleteInBasket);
    //   basketCopy.splice(index, 1);
    //   setBasket(basketCopy);
    // }
    // if (!titleEditRef.current) {
    //   return;
    // } else {
    //   titleEditRef.current.focus();
    // }
  };

  const handleAddButton = (event, id) => {
    event.stopPropagation();

    const productToAdd = findInArray(id, menu);
    handleAddToBasket(productToAdd);
    
  };

  // Affichage
  if (menu.length === 0)
    return isModeAdmin ? (
      <EmptyMenuAdmin onReset={resetMenu} />
    ) : (
      <EmptyMenuClient />
    );

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
            onClick={() => handleClickProduct(id)}
            isHoverable={isModeAdmin}
            isSelected={checkIsProductSelected(id, productSelected.id)}
            onAdd={(event) => handleAddButton(event, id)}
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
    //overflow-y: scroll;
    margin: auto;
    padding: 30px 0 50px 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-row-gap: 25px;
    grid-column-gap: 10px;
    z-index: -1;
  }
  @media screen and (min-width: 2000px) {
    .products-container {
      max-width: 2000px;
      height: 100%;
      width: 100%;
    }
  }
`;

export default Menu;

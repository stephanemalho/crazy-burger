import React, { useContext, useEffect, useState } from "react";

import OrderContext from "../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import OnLoadMenu from "./OnLoadMenu";
import Card from "../../../../reusableUI/Card";
import { formatPrice } from "../../../../../utils/maths";
import { checkIsProductSelected } from "./helper";
import { EMPTY_PRODUCT } from "../../../../../enums/product";
import { isEmpty } from "../../../../../utils/arrays";
import { defaultImage } from "../../../../../assets/images";
import { MenuGridStyled } from "../../../../../styled";

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

  useEffect(() => {
    !isEmpty(menu) && setIsLoading(false);
    setTimeout(() => {
      setIsLoading(false);
    }
    , 2000);
  }, [menu, isLoading]);

  const handleProductDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    const userName = window.location.pathname.split("/").pop();
    handleDeleteProduct(idProductToDelete, userName);
    handleDeleteBasketProduct(idProductToDelete);
    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT);
  };

  const handleAddProducts = (event, idProductToAdd) => {
    event.stopPropagation();
    handleAddToBasket(idProductToAdd);
    
    console.log("idProductToAdd", idProductToAdd);
  };

  // Affichage
  if (isEmpty(menu) || (isLoading && isEmpty)) {
    return isLoading ? (
      <OnLoadMenu />
    ) : isModeAdmin ? (
      <EmptyMenuAdmin onReset={resetMenu} />
    ) : (
      <EmptyMenuClient />
    );
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

export default Menu;

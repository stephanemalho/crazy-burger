import React, { useContext } from "react";

import OrderContext from "../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import OnLoad from "../../../../loader/OnLoad";
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
    userName,
    isModeAdmin,
    handleDeleteProduct,
    handleAddToBasket,
    resetMenu,
    setProductSelected,
    productSelected,
    handleDeleteBasketProduct,
    handleProductSelected,
  } = useContext(OrderContext);
  
  const handleProductDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDeleteProduct(idProductToDelete, userName);
    handleDeleteBasketProduct(idProductToDelete, userName);
    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT);
  };

  const handleAddProducts = (event, idProductToAdd) => {
    event.stopPropagation();
    handleAddToBasket(idProductToAdd, userName);
  };

  console.log("menu on mounting" ,menu);

  if (!menu) return <OnLoad label={"Chargement du menu"} />;
  if (isEmpty(menu)) {
    if (isModeAdmin)
      return (
        <EmptyMenuAdmin
          onReset={() => {
            resetMenu(userName);
          }}
        />
      );
    return <EmptyMenuClient />;
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

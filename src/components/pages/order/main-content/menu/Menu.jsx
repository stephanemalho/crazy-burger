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
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { onLoadMenuMessage } from "../../../../../utils/variables";

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

  const handleAddProducts = async (event, idProductToAdd) => {
    event.stopPropagation();
    await handleAddToBasket(idProductToAdd, userName);
  };

  console.log("menu on mounting", menu);

  if (menu === undefined) return <OnLoad label={onLoadMenuMessage} />;
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
      <TransitionGroup className="products-container">
        {menu.map(({ title, id, imageSource, price }) => (
          <CSSTransition key={id} timeout={300} classNames="card-animation-rtg">
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
          </CSSTransition>
        ))}
      </TransitionGroup>
    </MenuGridStyled>
  );
}

export default Menu;

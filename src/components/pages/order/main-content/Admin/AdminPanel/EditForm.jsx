import React, { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage";

export default function EditForm() {
  const { cardSelected, setCardSelected, handleEditCard, titleEditRef } =
    useContext(OrderContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const productUptaded = { ...cardSelected, [name]: value };

    setCardSelected(productUptaded);
    handleEditCard(productUptaded);
    console.log();
  };

  return (
    <Form
      onChange={handleChange}
      product={cardSelected}
      ref={titleEditRef}
      hintMessage={<EditInfoMessage />}
    />
  );
}

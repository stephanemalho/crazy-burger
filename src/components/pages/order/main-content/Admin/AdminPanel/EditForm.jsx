import React, { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage";

export default function EditForm() {
  const { productSelected, setProductSelected, handleEditProduct, titleEditRef } =
    useContext(OrderContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const productUptaded = { ...productSelected, [name]: value };

    setProductSelected(productUptaded);
    handleEditProduct(productUptaded);
    console.log();
  };

  return (
    <Form
      onChange={handleChange}
      product={productSelected}
      ref={titleEditRef}
      hintMessage={<EditInfoMessage />}
    />
  );
}

import React, { useContext, useState } from "react";
import OrderContext from "../../../../../context/OrderContext";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage";
import EditSucessMessage from "./EditSucessMessage";

export default function EditForm() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { productSelected, setProductSelected, handleEditProduct, titleEditRef } =
    useContext(OrderContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const productUptaded = { ...productSelected, [name]: value };

    setProductSelected(productUptaded);
    handleEditProduct(productUptaded);
  };

  const handleBlur = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false); 
    }, 2000);
  };

  const handleFocus = () => {
    setShowSuccessMessage(false);
  };

  return (
    <Form
      onChange={handleChange}
      product={productSelected}
      ref={titleEditRef}
      onBlur={handleBlur}
      onFocus={handleFocus}
      hintMessage={showSuccessMessage ? <EditSucessMessage /> : <EditInfoMessage />}
    />
  );
}

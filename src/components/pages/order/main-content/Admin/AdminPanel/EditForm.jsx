import React, { useContext, useState } from "react";
import OrderContext from "../../../../../context/OrderContext";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage";
import EditSucessMessage from "./EditSucessMessage";

export default function EditForm() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const {
    productSelected,
    setProductSelected,
    handleEditProduct,
    titleEditRef,
  } = useContext(OrderContext);

  const handleChange = async (e) => {
    const userName = window.location.pathname.split("/").pop();
    const { name, value } = e.target;
    const productUptaded = { ...productSelected, [name]: value };
    setProductSelected(productUptaded);
    handleEditProduct(productUptaded , userName );
  };

  const handleFocus = () => {
    setShowSuccessMessage(false);
  };

  const handleBlur = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };

  return (
    <Form
      onChange={handleChange}
      product={productSelected}
      ref={titleEditRef}
      onBlur={handleBlur}
      onFocus={handleFocus}
      hintMessage={
        showSuccessMessage ? <EditSucessMessage /> : <EditInfoMessage />
      }
    />
  );
}

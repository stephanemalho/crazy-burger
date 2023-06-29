import React, { useContext, useState } from "react";
import OrderContext from "../../../../../context/OrderContext";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage";
import EditSucessMessage from "./EditSucessMessage";

export default function EditForm() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [valueOnFocus, setValueOnFocus] = useState("");
  const {
    userName,
    productSelected,
    setProductSelected,
    handleEditProduct,
    titleEditRef,
  } = useContext(OrderContext);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    const productUptaded = { ...productSelected, [name]: value };
    setProductSelected(productUptaded);
    handleEditProduct(productUptaded , userName );
  };

  const handleOnFocus = (e) => {
    const inputOnFucus = e.target.value ;
    setValueOnFocus(inputOnFucus);
  };

  const handleBlur = (e) => {
    const valueOnBlur = e.target.value;
    if (valueOnFocus !== valueOnBlur) {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);
    }
  };

  return (
    <Form
      onChange={handleChange}
      product={productSelected}
      ref={titleEditRef}
      onBlur={handleBlur}
      onFocus={handleOnFocus}
      hintMessage={
        showSuccessMessage ? <EditSucessMessage /> : <EditInfoMessage />
      }
    />
  );
}

import React, { useContext } from "react";

import { useDelayMessage } from "../../../../../../hooks/useDelayMessage"; // custom hook
import OrderContext from "../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import Form from "./Form";
import SuccessBox from "./SuccessBox";

export default function AddForm() {
  const { handleAddProduct, newProduct, setNewProduct } = useContext(OrderContext);
  const { isSubmited, displayMessage } = useDelayMessage(2000);  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const NewProduct = {
      ...newProduct,
      id: crypto.randomUUID(),
      key: Date.now(),
    };

    handleAddProduct(NewProduct);

    setNewProduct(EMPTY_PRODUCT);
    displayMessage();
  };
  

  return (
    <Form
      product={newProduct}
      onSubmit={handleSubmit}
      onChange={handleChange}
      isSubmited={isSubmited}
      submitButton={<SuccessBox isSubmited={isSubmited} />}
    />
  );
}

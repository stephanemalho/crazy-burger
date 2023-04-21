import React, { useContext, useState } from "react";

import OrderContext from "../../../../../context/OrderContext";
import { EMPTY_CARD } from "../../../../../../enums/card";
import Form from "./Form";
import SuccessBox from "./SuccessBox";

export default function AddForm() {
  const { handleAddCard, newCard, setNewCard } = useContext(OrderContext);
  const [isSubmited, setIsSubmited] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const NewCard = {
      ...newCard,
      id: crypto.randomUUID(),
      key: Date.now(),
    };

    handleAddCard(NewCard);

    setNewCard(EMPTY_CARD);
    setIsSubmited(true);

    setTimeout(() => {
      setIsSubmited(false);
    }, 2000);
  };

  return (
    <Form
      product={newCard}
      onSubmit={handleSubmit}
      onChange={handleChange}
      isSubmited={isSubmited}
      submitButton={<SuccessBox isSubmited={isSubmited} />}
    />
  );
}

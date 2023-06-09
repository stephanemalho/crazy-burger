import React from "react";
import { BsCloudCheck } from "react-icons/bs";
import { EditSuccessMessageStyled } from "../../../../../../styled";

export default function EditSucessMessage() {
  return (
    <EditSuccessMessageStyled>
      <BsCloudCheck className="EditSucessIcon"/>{" "}Modifications enregistrées!
    </EditSuccessMessageStyled>
  );
}

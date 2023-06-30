import React from "react";
import { BsCloudCheck } from "react-icons/bs";
import { EditSavingMessageStyled } from "../../../../../../styled";

export default function EditSavingMessage() {
  return (
    <EditSavingMessageStyled>
      <BsCloudCheck className="EditSavingIcon"/>{" "}Modifications enregistrées!
    </EditSavingMessageStyled>
  );
}

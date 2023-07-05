import React from "react";
import { BsCloudCheck } from "react-icons/bs";
import { EditSavingMessageStyled } from "../../../../../../styled";
import { editMessage } from "../../../../../../utils/variables"

export default function EditSavingMessage() {
  return (
    <EditSavingMessageStyled>
      <BsCloudCheck className="EditSavingIcon"/>{" "}{editMessage.saving}
    </EditSavingMessageStyled>
  );
}

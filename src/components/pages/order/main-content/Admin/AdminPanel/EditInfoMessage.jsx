import React from "react";
import { EditInfoMessageStyled } from "../../../../../../styled";
import { editMessage } from "../../../../../../utils/variables";

export default function EditInfoMessage() {
  return (
    <EditInfoMessageStyled>
      {editMessage.title}{" "}
      <span className="live-update">{editMessage.adjective}</span>
    </EditInfoMessageStyled>
  );
}

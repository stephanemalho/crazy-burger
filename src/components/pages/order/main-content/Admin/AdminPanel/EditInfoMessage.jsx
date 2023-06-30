import React from "react";
import { EditInfoMessageStyled } from "../../../../../../styled";

export default function EditInfoMessage() {
  return (
    <EditInfoMessageStyled>
      Cliquer sur un produit pour le modifier{" "}
      <span className="live-update"> en temps réel</span>
    </EditInfoMessageStyled>
  );
}

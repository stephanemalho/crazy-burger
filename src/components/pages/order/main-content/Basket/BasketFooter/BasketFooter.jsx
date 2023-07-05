import { FooterStyled } from "../../../../../../styled";
import { copyright } from "../../../../../../utils/variables";

export default function BasketFooter() {
  return (
    <FooterStyled>
      <span>{copyright.codedBy}</span>
    </FooterStyled>
  );
}

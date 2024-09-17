import styled from "styled-components"
import { HiCursorClick } from "react-icons/hi"
import { theme } from "../../../../../../assets/theme"

export default function HintMessage() {
  return (
    <HintMessageStyled>
      <span className="hint">Cliquer sur un produit pour le modifier</span>
      <HiCursorClick />
    </HintMessageStyled>
  )
}

const HintMessageStyled = styled.div`
  display: flex;
  align-items: center;
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P3};
  color: ${theme.colors.greyBlue};
  position: relative;

  top: 80px;
  padding-left: 80px;

  span {
    margin-right: 10px;
  }
`

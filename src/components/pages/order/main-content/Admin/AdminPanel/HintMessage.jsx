import { HiCursorClick } from "react-icons/hi"

import { HintMessageStyled } from "../../../../../../styled"

export default function HintMessage() {
  return (
    <HintMessageStyled>
      <span className="hint">Cliquer sur un produit pour le modifier</span>
      <HiCursorClick />
    </HintMessageStyled>
  )
}


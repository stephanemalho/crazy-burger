import { HiCursorClick } from "react-icons/hi"

import { HintMessageStyled } from "../../../../../../styled"
import { editMessage } from "../../../../../../utils/variables"

export default function HintMessage() {
  return (
    <HintMessageStyled>
      <span className="hint">{editMessage.toClick}</span>
      <HiCursorClick />
    </HintMessageStyled>
  )
}


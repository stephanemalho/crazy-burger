import { EmptyMenuClientStyled } from "../../../../../styled";
import { emptyMenuMessage } from "../../../../../utils/variables";

export default function EmptyMenuClient() {
  return (
    <EmptyMenuClientStyled>
      <span className="title">{emptyMenuMessage.clientTitle}</span>
      <span className="description">{emptyMenuMessage.descriptionTop}</span>
      <span className="description">{emptyMenuMessage.descriptionBottom}</span>
    </EmptyMenuClientStyled>
  )
}


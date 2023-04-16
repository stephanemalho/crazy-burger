import React, { useContext, useState } from 'react'
//import HintMessage from './HintMessage'
import OrderContext from '../../../../../context/OrderContext'
import styled from 'styled-components'
import { theme } from '../../../../../../assets/theme'
import ImagePreviou from './ImagePreviou'
import TextInput from '../../../../../reusableUI/TextInput'
import { getInputTextConfig } from './getInputTextConfig'
import { EMPTY_CARD } from '../../../../../../enums/card'

export default function EditForm() {
 
  const { cardSelected } = useContext(OrderContext)
  const [cardToEdit, setCardToEdit] = useState(EMPTY_CARD)

  const inputTexts = getInputTextConfig(cardSelected); 

  const handleChange = (e) => {
    const { name, value } = e.target
    setCardToEdit({ ...cardToEdit, [name]: value })

    console.log();
  }

  return (
    <EditFormStyled>
      <ImagePreviou title={cardSelected.title} imageSource={cardSelected.imageSource} />
      <div className="inputs-field">
        {inputTexts.map((input) => {
          return (
            <TextInput
              {...input}
              value={cardSelected[input.name]}
              onChange={handleChange}
              version="admin"
            />
          );
        })}
      </div>
    </EditFormStyled>
  )
}

const EditFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  width: 100%;
  padding-top: 5px;

  .inputs-field {
    grid-area: 1/2/4/3;
    border-radius: ${theme.borderRadius.round};
    display: grid;
    padding: 20px 0 10px 0;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 10px;
    width: 80%;
  }
`;

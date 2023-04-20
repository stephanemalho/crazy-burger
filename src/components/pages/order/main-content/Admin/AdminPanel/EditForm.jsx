import React, { useContext } from 'react'
import OrderContext from '../../../../../context/OrderContext'
import styled from 'styled-components'
import { theme } from '../../../../../../assets/theme'
import ImagePreviou from './ImagePreviou'
import TextInput from '../../../../../reusableUI/TextInput'
import { getInputTextConfig } from './getInputTextConfig'

export default function EditForm() {
 
  const { cardSelected, setCardSelected, handleEditCard, titleEditRef } = useContext(OrderContext)
  const inputTexts = getInputTextConfig(cardSelected); 

  const handleChange = (e) => {
    const { name, value } = e.target
    const productUptaded = { ...cardSelected, [name]: value }

    setCardSelected(productUptaded)
    handleEditCard(productUptaded)
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
              ref={input.name === "title" ? titleEditRef : null}
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

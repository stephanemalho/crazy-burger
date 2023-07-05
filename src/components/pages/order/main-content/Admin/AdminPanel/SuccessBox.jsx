import React from 'react'
import SucessButton from "../../../../../reusableUI/MainButton";
import SuccessMessage from './SuccessMessage';
import { FiCheck } from 'react-icons/fi';
import { SucessBoxStyled } from '../../../../../../styled';
import { addMessage } from '../../../../../../utils/variables';

export default function SuccessBox({ isSubmited }) {
  return (
      <SucessBoxStyled className="submit-box">
        <SucessButton
          className={"submit-button"}
          label={addMessage.toAdd}
          version={"success"}
        />
        <SuccessMessage label={addMessage.success} Icon={<FiCheck className="icon" />} isSubmited={isSubmited} className="message" />
      </SucessBoxStyled>
  )
}
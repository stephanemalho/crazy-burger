import React from 'react'
import SucessButton from "../../../../../reusableUI/MainButton";
import SuccessMessage from './SuccessMessage';
import { FiCheck } from 'react-icons/fi';
import { SucessBoxStyled } from '../../../../../../styled';

export default function SuccessBox({ isSubmited }) {
  return (
      <SucessBoxStyled className="submit-box">
        <SucessButton
          className={"submit-button"}
          label={"Ajouter un nouveau produit au menu"}
          version={"success"}
        />
        <SuccessMessage label={"Ajouté avec succès"} Icon={<FiCheck className="icon" />} isSubmited={isSubmited} className="message" />
      </SucessBoxStyled>
  )
}
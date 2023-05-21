import React from 'react'
import SucessButton from "../../../../../reusableUI/MainButton";
import styled from 'styled-components';
import SuccessMessage from './SuccessMessage';
import { FiCheck } from 'react-icons/fi';

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

const SucessBoxStyled = styled.div`
    display: grid;
    grid-area: 4/-2/-1/-1;
    justify-content: left;
    align-items: start;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    justify-items: start;
    width: 80%;
`;
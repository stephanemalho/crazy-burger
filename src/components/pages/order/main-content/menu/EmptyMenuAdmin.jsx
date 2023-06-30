import React from 'react'

import MainButton from '../../../../reusableUI/MainButton';
import { EmptyMenuAdminStyled } from '../../../../../styled';

export default function EmptyMenuAdmin({ onReset }) {
  return (
    <EmptyMenuAdminStyled>
      <span className="title">Le menu est vide ?</span>
      <span className="description">Cliquez ci-dessous pour le réinitialiser</span>
      <MainButton label={"Générer de nouveaux produits"} onClick={onReset} className={"empty-menu-btn"} />
    </EmptyMenuAdminStyled>
  )
}
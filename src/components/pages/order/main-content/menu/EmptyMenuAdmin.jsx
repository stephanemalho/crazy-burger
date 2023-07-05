import React from 'react'

import MainButton from '../../../../reusableUI/MainButton';
import { EmptyMenuAdminStyled } from '../../../../../styled';
import { emptyMenuMessage } from '../../../../../utils/variables';

export default function EmptyMenuAdmin({ onReset }) {
  return (
    <EmptyMenuAdminStyled>
      <span className="title">{emptyMenuMessage.title}</span>
      <span className="description">{emptyMenuMessage.callToAction}</span>
      <MainButton label={"Générer de nouveaux produits"} onClick={onReset} className={"empty-menu-btn"} />
    </EmptyMenuAdminStyled>
  )
}
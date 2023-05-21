import React from 'react'
import styled from 'styled-components';
import MainButton from '../../../../reusableUI/MainButton';
import { theme } from '../../../../../assets/theme';

export default function EmptyMenuAdmin({ onReset }) {
  return (
    <EmptyMenuStyled>
      <span className="title">Le menu est vide ?</span>
      <span className="description">Cliquez ci-dessous pour le réinitialiser</span>
      <MainButton label={"Générer de nouveaux produits"} onClick={onReset} className={"empty-menu-btn"} />
    </EmptyMenuStyled>
  )
}

const EmptyMenuStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 

  .title,
  .description {
    text-align: center;
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.greyBlue};
  }

  .title {
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.semiBold};
  }

  .description {
    font-size: ${theme.fonts.size.P4};
    margin-top: 20px;
  }

  .empty-menu-btn {
    margin-top: 30px;
    font-size: ${theme.fonts.size.XS};
    font-family: "Open Sans", cursive;
    width: auto;
    padding: 0 20px;
  }
`
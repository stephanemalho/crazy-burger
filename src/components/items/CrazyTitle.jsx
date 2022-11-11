import React from 'react'
import styled from 'styled-components';

import {theme} from "../../assets/theme/index"
import TitleLogo from './TitleLogo';

function CrazyTitle() {
  return (
    <StyledCrazyTitle>crazee <TitleLogo />  Burger</StyledCrazyTitle>
  )
}

const StyledCrazyTitle = styled.h1`
  
    
    font-size: ${theme.fonts.P6};
    color: ${theme.colors.primary_burger};
    font-family: "Amatic SC", cursive;

  `

export default CrazyTitle
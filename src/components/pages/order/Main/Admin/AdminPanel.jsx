import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../../../assets/theme'

export default function AdminPanel() {
  return (
    <AdminTabsStyled>AdminPanel</AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
    height: 250px;
`
import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../../../assets/theme'

export default function AdminTabs() {
  return (
    <AdminTabsStyled>AdminTabs</AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
   background-color: ${theme.colors.white};
    border: 1px solid red;
`

import React from 'react'
import styled from 'styled-components'
import Tab from '../../../../reusableUI/Tab'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

export default function AdminTabs() {
  return (
    <AdminTabsStyled>
      <Tab Icon={<FiChevronDown/>} />
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
display: flex;
padding: 0 20px;
`

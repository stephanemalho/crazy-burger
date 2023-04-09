import React from 'react'
import styled from 'styled-components'
import Tab from '../../../../reusableUI/Tab'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { theme } from '../../../../../assets/theme'

export default function AdminTabs({isCollapsed, setIsCollapsed}) {

  const handleClick = () => {
    setIsCollapsed(!isCollapsed)
  
  }

  return (
    <AdminTabsStyled>
      <Tab 
        Icon={isCollapsed ? <FiChevronUp/> : <FiChevronDown/> }
        onClick={() => handleClick()} 
        className={isCollapsed ? "is-active" : ""}
        />
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
display: flex;
padding: 0 20px;

.is-active {
  background-color: ${theme.colors.background_dark};
  color: ${theme.colors.white};
  border-color:${theme.colors.background_dark};
}
`

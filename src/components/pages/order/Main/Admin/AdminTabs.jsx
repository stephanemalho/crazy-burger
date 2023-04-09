import React from 'react'
import styled from 'styled-components'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdModeEditOutline } from 'react-icons/md'

import Tab from '../../../../reusableUI/Tab'
import { theme } from '../../../../../assets/theme'

export default function AdminTabs({isCollapsed, setIsCollapsed}) {

  const handleClick = () => {
    setIsCollapsed(!isCollapsed)
  
  }

  return (
    <AdminTabsStyled>
      <Tab 
        label=""
        Icon={isCollapsed ? <FiChevronUp/> : <FiChevronDown/> }
        onClick={() => handleClick()} 
        className={isCollapsed ? "is-active" : ""}
        />
        <Tab 
        label="Ajouter un produit"
        Icon={<AiOutlinePlus/> }
        onClick={() => handleClick()} 
        className={isCollapsed ? "is-active" : ""}
        />
        <Tab 
        label="Modifier un produit"
        Icon={<MdModeEditOutline/> }
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


button {
  margin-left: 1px;
}
`

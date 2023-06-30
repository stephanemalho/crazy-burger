import React from 'react'
import { SucessMessageStyled } from '../../../../../../styled'

export default function SuccessMessage({ label, Icon , isSubmited, className}) {
  return (
    <SucessMessageStyled>
          {isSubmited && (
            <small className={className}>
              {Icon}{" "}{label}
            </small>
          )}
    </SucessMessageStyled>
  )
}
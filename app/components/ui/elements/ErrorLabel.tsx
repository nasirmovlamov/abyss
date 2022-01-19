import React from 'react'
import styled from 'styled-components'

interface Props {
  validation: string
  validators: any
}

export const ErrorLabel = ({ validation, validators }: Props) => {
  return (
    <ErrorLabel_STY>
      {validation !== 'not-checked' && !validators.isValid && validators.message}
    </ErrorLabel_STY>
  )
}

const ErrorLabel_STY = styled.p`
  color: ${({ theme }) => theme.colors.red_1};
  height: 10px;
  margin-bottom: 10px;
`

import styled from 'styled-components'

export const CreateProduct_StepCont = styled.div`
  display: flex;
  column-gap: 11px;
  padding-left: 44px;
  padding-right: 44px;
  padding-top: 40px;
  width: 100%;
  height: 525px;
  overflow-y: auto;
`

export const CreateProduct_Tabs = styled.div`
  width: 100%;
  height: 84px;
  box-shadow: ${({ theme }) => theme.boxshadows.boxshadow1};
  border-radius: 15px 15px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CreateProduct_CloseButton_STY = styled.button`
  font-size: 24px;
  background-color: transparent;
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 10px;
  svg {
    fill: ${({ theme }) => theme.texts.text3};
  }
  &:hover {
    svg {
      fill: ${({ theme }) => theme.texts.text1};
    }
  }
`

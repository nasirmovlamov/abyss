import styled from 'styled-components'

export const ModalCont_STY = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  align-items: flex-start;
  background-image: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  left: 0;
  top: 0;
  z-index: 999;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  z-index: 999;
  padding-right: 112px;
  background-color: rgba(0, 0, 0, 0.8);
`

export const ModalFORM_STY = styled.form`
  z-index: 2;
  display: flex;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.backgrounds.background1};
  box-shadow: ${({ theme }) => theme.boxshadows.boxshadow4};
  border-radius: 15px;
  flex-direction: column;
  padding: 25px;
  position: relative;
`

export const ModalCont_BLUR_STY = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  /* backdrop-filter: blur(2px); */
  z-index: 1;
  pointer-events: none;
`

export const CreateThread_Tabs = styled.div`
  width: 100%;
  height: 84px;
  box-shadow: ${({ theme }) => theme.boxshadows.boxshadow1};
  border-radius: 15px 15px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CreateThread_CloseButton_STY = styled.button`
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

export const CreateThread_Tab = styled.div<{
  stage: boolean
  validated: boolean
}>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 5px solid
    ${({ theme, stage }) => (stage ? theme.sidecolors.sidecolor4 : theme.sidecolors.sidecolor1)};
`

export const CreateThread_Tab_Seperator = styled.div<{ validated: boolean }>`
  width: 100px;
  height: 1px;
  background-color: ${({ theme, validated }) =>
    validated ? theme.sidecolors.sidecolor4 : theme.sidecolors.sidecolor1};
`

export const CreateThread_Buttons_Cont = styled.div`
  width: 100%;
  height: 48px;
  box-shadow: ${({ theme }) => theme.boxshadows.boxshadow1};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0px 0px 15px 15px;
  padding-left: 22px;
  padding-right: 22px;
  .stepError {
    color: ${({ theme }) => theme.texts.text10};
    font-size: 14px;
    text-align: center;
  }
`

export const CreateThread_Button_NEXT = styled.button`
  width: auto;
  padding: 7px 22px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.backgrounds.background8};
`

export const CreateThread_Button_PREVOIUS = styled.button`
  width: auto;
  padding: 7px 22px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.backgrounds.background7};
`
export const CreateThread_RightButtons_flexer = styled.div`
  display: flex;
  column-gap: 22px;
  background-color: transparent;
  align-items: center;
  svg {
    color: ${({ theme }) => theme.backgrounds.background7};
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.backgrounds.background6};
    }
  }
`

export const CreateThread_StepCont = styled.div`
  display: flex;
  column-gap: 11px;
  padding-left: 44px;
  padding-right: 44px;
  padding-top: 40px;
  width: 100%;
  height: 525px;
  overflow-y: auto;
`
export const AreYouSureButtonsCont = styled.div`
  display: flex;
  column-gap: 10px;
  width: 100%;
  justify-content: center;
`

import styled from "styled-components";

export const CreateProduct_Tabs = styled.div`
   width: 100%;
   height:70px;
   margin-bottom: 50px;
   box-shadow: ${({theme}) => theme.boxshadows.boxshadow1};
  border-radius: 15px 15px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const CreateProduct_Tab = styled.div`
   width: 30px;
   height: 30px;
   border-radius: 50%;
`

export const CreateProduct_Tab_Seperator = styled.div`
  width: 50px;
  height: 1px;
  background-color: ${({theme}) => theme.sidecolors.sidecolor1};
`

export const CreateProduict_Tab_STY = styled.div<{validated:boolean , currentStage:boolean}>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 5px solid ${({theme , validated, currentStage}) =>validated ? theme.colors.red_1 : (currentStage ? theme.sidecolors.sidecolor4 : theme.sidecolors.sidecolor1)};
`
import styled from 'styled-components';

export const ProductCreateModal = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 999999;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
`
export const ProductCreateForm = styled.div`
  z-index: 2;
  display: flex;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.backgrounds.background1};
  box-shadow: ${({ theme }) => theme.boxshadows.boxshadow4};
  /* padding: 25px; */
  border-radius: 15px;
  flex-direction: column;
  position: relative;
  width: 900px;
  height: 657px;
  margin-top: calc(100vh / 2 - 317.5px);
  align-items: center;
`

export const CreateProduct_Buttons_Cont = styled.div`
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
export const CreateProduct_Button_NEXT = styled.button`
  width: auto;
  padding: 7px 22px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.backgrounds.background8};
`

export const CreateProduct_Button_PREVOIUS = styled.button`
  width: auto;
  padding: 7px 22px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.backgrounds.background7};
`

export const ProductLabelCont = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 20px;
`

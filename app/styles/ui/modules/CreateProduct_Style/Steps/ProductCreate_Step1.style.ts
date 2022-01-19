import styled from 'styled-components'

export const ProductCreate_Step1_Style = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  .topCont {
    display: flex;
    justify-content: space-between;
  }

  .codeWord {
    font-size: 24px;
    color: ${({ theme }) => theme.texts.text2};
    column-gap: 20px;
    width: 100px;
    display: flex;
    column-gap: 10px;
    align-items: center;
  }

  .upload {
    display: flex;
    column-gap: 10px;
    align-items: center;
    .info {
      font-size: 15px;
      color: ${({ theme }) => theme.texts.text2};
    }
    button {
      width: 150px;
      height: 30px;
      background-color: ${({ theme }) => theme.backgrounds.background8};
      box-shadow: ${({ theme }) => theme.boxshadows.boxshadow2};
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      border-radius: 5px;
      .text {
        font-size: 16px;
        color: ${({ theme }) => theme.texts.text5};
      }
      input {
        width: 100%;
        height: 100%;
        background: white;
        opacity: 0;
        position: absolute;
      }
    }
  }

  button {
    background-color: tansparent;
  }
`

export const CodeMirror_STY = styled.div`
  .cm-editor {
    border-radius: 10px;
    overflow: hidden;
    max-height: 389px;

    &:hover {
      box-shadow: ${({ theme }) => theme.boxshadows.boxshadow8};
    }
  }
`

export const CodeMirror_ReadOnly_STY = styled.div`
  .cm-editor {
    border-radius: 10px;
    overflow: hidden;
    height: auto;
    &:hover {
      box-shadow: ${({ theme }) => theme.boxshadows.boxshadow8};
    }
  }
`

export const SelectLangType_STY = styled.select`
  padding: 7px 10px;
  background: ${({ theme }) => theme.backgrounds.background3};
  color: ${({ theme }) => theme.texts.text1};
  width: 150px;
  border-radius: 10px;
  &:hover {
    box-shadow: ${({ theme }) => theme.boxshadows.boxshadow8};
  }
`

export const CreateProduct_Step1_Error = styled.p`
  color: ${({ theme }) => theme.colors.red_1};
`

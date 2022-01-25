import styled from 'styled-components';

export const CreateThreadEDITORWrapper_STY = styled.div`
  display: flex;
  &:hover {
    box-shadow: ${({ theme }) => theme.boxshadows.boxshadow8};
  }
  border-radius: 10px;
  .quill {
    width: 100%;
    box-shadow: ${({ theme }) => theme.boxshadows.boxshadow1};
    border-radius: 10px 10px 10px 10px;
    .ql-toolbar {
      border-radius: 10px 10px 0px 0px;
      border-color: transparent;
      /* border: 2px solid red; */
      .ql-stroke,
      .ql-snow {
        stroke: white;
      }
    }
    .ql-container {
      border-color: transparent;
      border-radius: 0px 0px 10px 10px;
      max-height: 350px;
      padding-bottom: 20px;
      overflow-y: auto;
      overflow: visible;
      .ql-editor {
        color: ${({ theme }) => theme.texts.text1};
      }
    }
  }
`

export const CreateAddAnswerEDITORWrapper_STY = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  &:hover {
    box-shadow: ${({ theme }) => theme.boxshadows.boxshadow8};
  }
  border-radius: 10px;
  .quill {
    width: 100%;
    box-shadow: ${({ theme }) => theme.boxshadows.boxshadow1};
    border-radius: 10px 10px 10px 10px;
    .ql-toolbar {
      border-radius: 10px 10px 0px 0px;
      border-color: transparent;
      .ql-stroke,
      .ql-snow {
        stroke: white;
      }
    }
    .ql-container {
      border-color: transparent;
      border-radius: 0px 0px 10px 10px;
      max-height: 350px;
      /* padding-bottom:20px; */
      .ql-editor {
        color: ${({ theme }) => theme.texts.text1};
      }
    }
  }
`

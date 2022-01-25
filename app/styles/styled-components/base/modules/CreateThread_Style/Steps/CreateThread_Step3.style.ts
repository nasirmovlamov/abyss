import styled from 'styled-components';

export const CreateThread_Step3_STY = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  .errorCont {
    display: flex;
    align-items: center;
    column-gap: 10px;
    width: 100%;
    svg {
      color: ${({ theme }) => theme.colors.red_1};
      font-size: 26px;
    }
    p {
      color: ${({ theme }) => theme.colors.red_1};
    }
    button {
      border: none;
      background-color: transparent;
      color: ${({ theme }) => theme.texts.text9};
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
    }
  }
  .threadValid {
    display: flex;
    align-items: center;
    column-gap: 10px;
    width: 100%;
    svg {
      color: green;
      font-size: 26px;
    }
    p {
      color: ${({ theme }) => theme.texts.text1};
    }
  }
`

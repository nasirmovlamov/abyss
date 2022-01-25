import styled from 'styled-components';

export const ForgetPassForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  width: 400px;
  .form-group {
    width: 100%;
  }
  input {
    width: 100%;
    height: 35px;
    border-radius: 15px;
    padding-left: 10px;
    font-size: 18px;
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
    &:hover {
    }
  }
  button {
    width: 100%;
    height: 35px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.backgrounds.background1};
    color: ${({ theme }) => theme.texts.text1};
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }

  button[disabled] {
    background-color: red;
    color: ${({ theme }) => theme.texts.text2};
  }
`

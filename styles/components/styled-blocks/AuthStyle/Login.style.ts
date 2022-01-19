import styled from 'styled-components';

export const AuthPageContainer_STY = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 33px;
  margin-top: 78px;
`
export const TopLogoContainer_STY = styled.div`
  display: flex;
  width: 223px;
  height: 70px;
  column-gap: 12px;
`
export const LoginContainer_STY = styled.div`
  display: flex;
  width: 810px;
  height: 480px;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  min-height: 486px;
  padding: 1px;
  box-shadow: ${({ theme }) => theme.boxshadows.boxshadow4};
  a {
    color: ${({ theme }) => theme.texts.text9};
    text-decoration: none;
  }
  .part1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-left: 64px;
    padding-right: 64px;
    padding-top: 100px;
    padding-bottom: 64px;
    background-color: ${({ theme }) => theme.backgrounds.background2};
    width: 50%;
    box-sizing: border-box;
    border-radius: 10px 0px 0px 10px;

    .buttonCont {
      width: 100%;
      display: flex;
      row-gap: 50px;
      flex-direction: column;
      .githubButton {
        width: 100%;
        height: 50px;
        background-color: #333333;
        color: ${({ theme }) => theme.texts.text1};
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 12px;
        font-size: 14px;
        font-family: r;
      }
      .gmailButton {
        width: 100%;
        height: 50px;
        background-color: ${({ theme }) => theme.backgrounds.background7};
        color: ${({ theme }) => theme.texts.text5};
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 12px;
        font-size: 14px;
        font-family: r;
      }
    }
    .agreeement {
      color: ${({ theme }) => theme.texts.text3};
      text-align: center;
      witdth: 100%;
      font-size: 11px;
    }
  }
  .part2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 64px;
    padding-right: 64px;
    padding-top: 21px;
    padding-bottom: 36px;
    background-color: ${({ theme }) => theme.backgrounds.background1};
    width: 50%;
    box-sizing: border-box;
    border-radius: 0px 10px 10px 0px;
    .title {
      color: ${({ theme }) => theme.texts.text3};
      font-size: 14px;
      font-weight: bold;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 15px;
      width: 100%;
      .form-cont {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 7px;
        margin-top: 25px;
        box-sizing: border-box;
        label {
          color: ${({ theme }) => theme.texts.text3};
        }
        input {
          height: 50px;
          padding-left: 10px;
          border-radius: 10px;
          background-color: ${({ theme }) => theme.backgrounds.background1};
          box-shadow: ${({ theme }) => theme.boxshadows.boxshadow1};
          color: ${({ theme }) => theme.texts.text3};
        }
        .error {
          height: 18px;
          color: ${({ theme }) => theme.texts.text10};
          margin-left: 5px;
        }
      }
      .forgot-pass-cont {
        width: 100%;
        display: flex;
        margin-top: 10px;
        justify-content: flex-end;
        a {
          font-size: 12px;
        }
      }
      .login-button {
        margin-top: 50px;
        height: 35px;
        width: 160px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.backgrounds.background8};
        font-size: 15px;
      }
      .signup-button {
        margin-top: 15px;
        height: 35px;
        width: 160px;
        border-radius: 10px;
        background-color: transparent;
        color: ${({ theme }) => theme.texts.text3};
        font-size: 15px;
      }
    }
    .authButtonCont {
      display: flex;
      flex-direction: column;
      margin-top: 90px;
    }
  }
`

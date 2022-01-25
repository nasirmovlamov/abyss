import styled from 'styled-components';

export const Home_STYLE = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 190px;
  box-sizing: border-box;
  .title {
    font-size: 44px;
    line-height: 71px;
    letter-spacing: 0.25px;
    color: ${({ theme }) => theme.texts.text1};
  }
  .subTitle {
    font-size: 26px;
    line-height: 31px;
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.texts.text2};
  }
  .registerButton {
    margin-top: 30px;
    font-size: 20px;
    line-height: 28px;
    color: ${({ theme }) => theme.texts.text5};
    background-color: ${({ theme }) => theme.backgrounds.background8};
    box-shadow: ${({ theme }) => theme.boxshadows.boxshadow2};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    min-height: 48px;
    padding: 0 24px;
  }
`

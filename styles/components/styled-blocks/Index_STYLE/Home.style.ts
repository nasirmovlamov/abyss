import styled  from "styled-components";

export const Home_STYLE = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 30px;
    padding-right: 100px;
    box-sizing: border-box;
    .title {
        font-size: 44px;
        line-height: 71px;
        letter-spacing: 0.25px;
        color:${({theme}) => theme.texts.text1};
    }
    .subTitle{
        font-size: 26px;
        line-height: 31px;
        letter-spacing: 0.2px;
        color:${({theme}) => theme.texts.text2};
    }
    .registerButton{
        margin-top: 30px;
        font-size: 22px;
        line-height: 31px;
        letter-spacing: 0.2px;
        color:${({theme}) => theme.texts.text5};
        width: 138px;
        height: 48px;
        background-color: ${({ theme }) => theme.backgrounds.background8};
        box-shadow: ${({ theme }) => theme.boxshadows.boxshadow2};
        position: relative; 
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border-radius: 5px;
    }
`
import styled from "styled-components";

export const AuthPageContainer_STY = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap:33px;
    margin-top: 78px;
`
export const TopLogoContainer_STY = styled.div`
    display: flex;
    width: 223px;
    height: 70px;
    column-gap:12px;
    
`
export const LoginContainer_STY = styled.div`
    display: flex;
    width:810px;
    height:480px
    box-sizing: border-box;
    border-radius: 10px;
    overflow:hidden;
    min-height:486px;   
    padding:1px;
    box-shadow:${({theme}) => theme.boxshadows.boxshadow4};

    .part1 {
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-between;
        padding-left:64px;
        padding-right:64px;
        padding-top:100px;
        padding-bottom:64px;
        background-color:${({theme}) => theme.backgrounds.background2};
        width:50%;
        box-sizing: border-box;
        border-radius: 10px 0px 0px 10px;

        .buttonCont {
            width:100%;
            display:flex;
            row-gap:50px;
            flex-direction:column;
            .githubButton{
                width:100%;
                height:50px;
                background-color:#333333;
                color:${({theme}) => theme.texts.text1};
                border-radius:10px;
                display:flex;
                justify-content:center;
                align-items:center;
                column-gap:12px;
                font-size:14px;
                font-family:r;
            }
            .gmailButton{
                width:100%;
                height:50px;
                background-color:${({theme}) => theme.backgrounds.background7};
                color:${({theme}) => theme.texts.text5};
                border-radius:10px;
                display:flex;
                justify-content:center;
                align-items:center;
                column-gap:12px;
                font-size:14px;
                font-family:r;
            }
        }
        .agreeement{
            color:${({theme}) => theme.texts.text3};
            text-align:center;
            witdth:100%;
            font-size:11px;
            a {

            }
        }
    }
    .part2 {
        display:flex;
        flex-direction:column;
        align-items:center;
        padding-left:64px;
        padding-right:64px;
        padding-top:21px;
        padding-bottom:36px;
        background-color:${({theme}) => theme.backgrounds.background1};
        width:50%;
        box-sizing: border-box;
        border-radius: 0px 10px 10px 0px;

        .formCont {
            display:flex;
            flex-direction:column;
            margin-top:40px;
        }
        .authButtonCont {
            display:flex;
            flex-direction:column;
            margin-top:90px;
            
        }
    }
`
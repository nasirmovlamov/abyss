import styled from "styled-components";

export const CreateProduct_Step1_Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    .flexer {
        column-gap: 22px;
    }
    .info-block{
        margin-top: 44px;
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        text-align: center;
        width: 685px;
        p {
            font-size: 13px;
            color: ${({theme}) => theme.texts.text1};
            a{
                color: ${({theme}) => theme.texts.text9};
                text-decoration: none;
            }
        }
    }
`





export const SelectThreadType = styled.button<{selected :boolean}>`
    width: 236px;
    height: auto;
    display: flex;
    flex-direction: column;
    border:none;
    background-color: transparent;
    box-sizing: border-box;
    row-gap:20px;
    
    .title {
        color: ${({theme , selected}) => selected ? theme.texts.text8 :theme.texts.text2};
        text-align: center;
        width: 100%;
        font-size: 24px;
    }

    .textBlock {
        box-shadow: ${({theme  }) => theme.boxshadows.boxshadow1};
        outline: 2px    solid ${({theme ,selected}) =>selected? theme.sidecolors.sidecolor4 :' transparent'};
        padding: 15px;
        padding-bottom: 100px;
        border-radius: 15px;
        row-gap: 25px;
        display: flex;
        flex-direction: column;
        background-color:${({theme , selected}) => selected ? theme.backgrounds.background2 :theme.backgrounds.background1};
        p{
            font-size: 15px;
            color: ${({theme}) => theme.texts.text1};
            width: 100%;
            text-align: start;
            line-height: 20px;
            border: none;
        }
    }

    &:hover {
        .title {
            color: ${({theme , selected}) => selected ? theme.texts.text8 :theme.texts.text1};
        }
        .textBlock {
            background-color:${({theme , selected}) => selected ? theme.backgrounds.background2 :theme.backgrounds.background2} ;
            box-shadow: ${({theme}) => theme.boxshadows.boxshadow8};
        
        }
    }
    
`
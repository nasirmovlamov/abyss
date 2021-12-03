import styled from "styled-components";

export const CreateProduct_Step1_Container = styled.div`
    display: flex;
    column-gap:50px;
`





export const SelectThreadType = styled.button`
    width: 236px;
    height: auto;
    display: flex;
    flex-direction: column;
    border:none;
    background-color: transparent;
    box-sizing: border-box;
    row-gap:20px;
    .title {
        color: ${({theme}) => theme.texts.text1};
        text-align: center;
        width: 100%;
        font-size: 24px;
    }

    .textBlock {
        box-shadow: ${({theme}) => theme.boxshadows.boxshadow1};
        padding: 15px;
        padding-bottom: 100px;
        border-radius: 15px;
        row-gap: 25px;
        display: flex;
        flex-direction: column;
        p{
            font-size: 15px;
            color: ${({theme}) => theme.texts.text1};
            width: 100%;
            text-align: start;
            line-height: 20px;
        }
    }
    
`
import styled  from "styled-components";


export const CreateQuestion_Title1 = styled.label`

`

export const CreateQuestion_BLock = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    .label-cont {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
    .title {
        font-size: 20px;
        color: ${({theme}) => theme.texts.text2};
    }
    .input1 {
        border-radius: 10px;
        border: none;
        height: 40px;
        padding-left: 10px;
        background-color: transparent;
        box-shadow: ${({theme}) => theme.boxshadows.boxshadow1};
        color: ${({theme}) => theme.texts.text2};
        &:focus{
            color: ${({theme}) => theme.texts.text1};
        }
        
    }


`

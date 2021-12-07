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



export const CreateQuestion_Tags_STY = styled.div`
    display: flex;
    width: 100%;
    column-gap: 10px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.backgrounds.background1};
    box-shadow: ${({theme}) => theme.boxshadows.boxshadow1};
    padding: 10px;
    height: auto;
    min-height: 60px;
    row-gap: 10px;
    flex-wrap: wrap;
    align-items: center;
    .tag {
        padding: 5px;
        background-color: ${({theme}) => theme.backgrounds.background4};
        color: ${({theme}) => theme.texts.text2};
        position: relative;
        border-radius: 5px;
        .deleteTag{
            position: absolute;
            top: -5px;
            right: -5px;
            background-color: ${({theme}) => theme.colors.red_1};
            color: ${({theme}) => theme.texts.text2};
            width: 14px;
            height:14px;
            font-size: 10px;
            padding-bottom: 2px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            cursor: pointer;
        }

    }
    input {
        width: 350px;
        border:none;
        background-color: transparent;
        color: ${({theme}) => theme.texts.text1};
    }
`

export const Error_STY = styled.label`
    color: ${({theme}) => theme.colors.red_1};
`

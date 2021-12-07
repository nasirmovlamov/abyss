import styled from "styled-components";

export const CreateProductStep2_CONT_STY = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 50px;

    .addNewSection
    {
        width: 100%;
        height: 50px;
        background-color: ${({ theme }) => theme.backgrounds.background8};
        box-shadow: ${({ theme }) => theme.boxshadows.boxshadow2};
        position: relative; 
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin-top: 15px;
        font-size: 22px;
        color: ${({ theme }) => theme.texts.text5};

        svg {
            color: ${({ theme }) => theme.texts.text5};
            font-size: 15px;
        }
    }
    .editorTitle {
        position: absolute;
        z-index: 2;
        top: 0px;
        margin-top: 40px;
        width: 100%;
        padding: 10px;
        box-shadow: ${({theme}) => theme.boxshadows.boxshadow1};
        background-color: ${({theme}) => theme.backgrounds.background2};
    }
    .titleTags{
        font-size: 20px;
        color: ${({theme}) => theme.texts.text2};
    }
    .titleClips
    {
        z-index: 2;
        top: 0px;
        width: 100%;
        padding: 10px;
        font-size: 24px;
        box-shadow: ${({theme}) => theme.boxshadows.boxshadow1};
        background-color: ${({theme}) => theme.backgrounds.background2};
        border-radius: 10px 10px 0px 0px;
        padding-left: 20px;
        color: ${({theme}) => theme.texts.text1};
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
    .error {
        color: ${({theme}) => theme.colors.red_1};
    }
    .customBlock
    {
        .ql-container
        {
            overflow-y: auto;
            padding-bottom: 0px;
            max-height:350px;
            padding-bottom: 20px;
        }
        .delEditorBtn
        {
            position: absolute;
            top: -5px;
            right: -5px;
            width: 20px;
            height: 20px;
            background-color: ${({theme}) => theme.colors.red_1};
            border-radius: 50%;
            color: ${({theme}) => theme.texts.text5};
        }
        .dragEditorBtn{
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            left: -10px;
            top: -10px;
            width: 30px;
            height: 30px;
            background-color: ${({theme}) => theme.backgrounds.background2};
            color: ${({theme}) => theme.texts.text1};
            border-radius: 50%;
            z-index: 3;
        }
    }
`

export const CreateProductLabelCont = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    position: relative;
    height: auto;
    border-radius: 10px;
`



export const EditorWraper_STY = styled.div`
    display: flex;
    width: 100%;
    box-shadow: ${({theme}) => theme.boxshadows.boxshadow1};
    border-radius:10px 10px 10px 10px;
    .ql-toolbar{
        border-radius:10px 10px 0px 0px;
        border-color: transparent;
        /* border: 2px solid red; */
        .ql-stroke , .ql-snow {
            stroke:white;
        }
        z-index: 3;
        *{
            z-index: 3;
        }
    }
    .ql-container {
        
        border-color: transparent;
        border-radius:0px 0px 10px 10px;
        max-height:350px;
        padding: 0px;
        overflow: hidden;
        padding-top: 20px;
        min-height: 200px;
        box-sizing: border-box;
        padding-bottom: 30px;
        .ql-editor {
            min-height: 200px;
            padding-top: 20px;
            /* padding-bottom: 20px; */
            margin-top: 20px;
            color:${({theme}) => theme.texts.text1};
        }
    }
`

export const CreateProduct_ClipsCont_STY = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0px 0px;
    border-radius: 10px 10px 10px 10px;
    row-gap: 10px;
    box-shadow: ${({theme}) => theme.boxshadows.boxshadow1};
    .clipsSectionCont {
        width:100%;
        max-height: 400px;
        display:flex;
        box-sizing: border-box;
        padding: 15px;
        .clipsLeftSection {
            width: 100%;
            height: 300px;
            box-shadow: ${({theme}) => theme.boxshadows.boxshadow1};
            box-sizing: border-box;
            border-radius: 10px;
            overflow:hidden ;
            overflow-y:auto;
            img {
            padding: 15px 15px;

            }
        }
        .clipsRightSection {
            height: 300px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            row-gap: 15px;
            box-sizing: border-box;
            padding: 10px 15px;
            .clipItem {
                box-shadow: ${({theme}) => theme.boxshadows.boxshadow1};
                border-radius: 10px;
                box-sizing: border-box;
                padding: 10px 10px;
                position: relative;
                .del
                {
                    position: absolute;
                    top: -5px;
                    right: -5px;
                    width: 20px;
                    height: 20px;
                    background-color: ${({theme}) => theme.colors.red_1};
                    border-radius: 50%;
                    color: ${({theme}) => theme.texts.text5};
                }
                .move 
                {
                    position: absolute;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    left: -10px;
                    top: -10px;
                    width: 30px;
                    height: 30px;
                    background-color: ${({theme}) => theme.backgrounds.background2};
                    border-radius: 50%;
                    svg {
                        color: ${({theme}) => theme.texts.text1};
                    }
                }
                img {
                    width: 100%;
                }
            }
        }
    }
    
    .addClipImage
    {
        width: 100%;
        height: 30px;
        background-color: ${({ theme }) => theme.backgrounds.background8};
        box-shadow: ${({ theme }) => theme.boxshadows.boxshadow2};
        position: relative; 
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border-radius: 5px;
        margin-top: 15px;
        .text{
            font-size: 16px;
            color: ${({ theme }) => theme.texts.text5};
        }
        input {
            width: 100%;
            height: 100%;
            background: white;
            opacity: 0;
            position: absolute;
        }
    }
`

export const CreateProduct_DragCont_STY = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0px 0px;
    row-gap: 50px;
`




export const CreateProduct_TagsCont_STY = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    row-gap: 10px;
`

export const CreateProduct_Tags_STY = styled.div`
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

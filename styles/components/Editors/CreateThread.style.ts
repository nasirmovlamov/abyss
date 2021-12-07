import styled from "styled-components";

export const CreateThreadEDITORWrapper_STY = styled.div`
    display: flex;
    .quill{
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
        }
        .ql-container {
            border-color: transparent;
            border-radius:0px 0px 10px 10px;
            max-height:350px;
            padding-bottom:20px;
            overflow-y:auto;
            overflow: visible;
            .ql-editor {
                color:${({theme}) => theme.texts.text1};
                
            }
        }
    }
`
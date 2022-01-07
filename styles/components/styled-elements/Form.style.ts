import styled from "styled-components";

export const InputGroup_STY = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    row-gap: 5px;
`;

export const Input_STY = styled.input<{error:any}>`
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 10px;
    font-size: 16px;
    color: #333;
    outline: none;
    transition: all 0.3s ease-in-out;
    /* border: ${({error}) =>error ? '1px solid #f44336' : 'none'}; */
    /* box-shadow:${({error}) =>error ? '0 0 0 2px #f44336' : 'none'}; */

    &:focus {
        /* border: ${({error}) =>error ? '1px solid #f44336' : '1px solid #00bcd4'}; */
        box-shadow:${({error}) =>error ? '0 0 0 2px #00bcd4' : '0 0 0 2px #00bcd4'};
    }
`;


export const Label_STY = styled.label`
    font-size: 16px;
    color: #333;
    color:${({theme}) => theme.texts.text1};
    margin-bottom: 5px;
`;


export const Error_STY = styled.div<{error:any}>`
    font-size: 12px;    
    height: 12px;
    color: ${({theme}) => theme.colors.red_1};
    margin-bottom: 5px;
    opacity: ${({error}) => error ? 1:0};
    transition: 0.3s ;
`;



export const F_Title_STY = styled.h2`
    font-size: 30px;
    color:${({theme}) => theme.titles.title3};
    text-align: center;
    margin-bottom: 20px;
`;

export const F_ForgetPass_STY = styled.button`
   border: none;
   background: transparent;
    font-size: 12px;
    margin-top: 4px;
    color:${({theme}) => theme.texts.text1};

`;

export const F_FlexerEnd_STY = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const F_Button_STY = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    border: none;
    background-color: transparent;
    border-radius:10px;
    padding:5px 10px;
    column-gap:5px;
    background-color:${({theme}) => theme.backgrounds.background6};
    transition:0.5s;
    width:100%;
    margin-bottom:5px;
    font-size: 18px;
    svg {
        width: 24px;
        fill: ${({theme}) => theme.backgrounds.background2};
        transition:0.5s;
    }
    span{
        transition:0.5s;
    }
    &:hover {
        background-color: ${({theme}) => theme.background_hover.hover1};
        box-shadow:${({theme}) => theme.boxshadows.boxshadow1};
        svg {
            fill: ${({theme}) => theme.backgrounds.background6};
            transition:0.5s;
        }
        span {
            color:${({theme}) => theme.texts.text1};
            transition:0.5s;
        }
    }
`;



export const F_ButtonCont_STY = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    margin-top:20px ;
`;



export const F_CloseButton_STY = styled.button`
    font-size: 18px;
    background-color: transparent;
    svg {
        fill:${({theme}) => theme.texts.text3};
    }
    &:hover {
        svg {
            fill:${({theme}) => theme.texts.text1};
        }
    }

`;

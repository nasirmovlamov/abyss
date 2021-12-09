import styled from "styled-components";


export interface PercentageLineProps {
    percentage:number
}

export interface ProductIconProps {
    backgroundColor:string
    index:number
}

export const FormQuestionCont = styled.div`
    display: flex;
    width: 100%;
    padding-top: 5px;
    padding-bottom: 8px;
    padding-left: 20px;
    padding-right: 44px;
    box-sizing: border-box;
    /* border-radius: 6px; */
    border-radius: 10px;
    background-color: ${({theme}) => theme.backgrounds.background1};
    box-shadow: ${({theme}) => theme.boxshadows.boxshadow4};
    justify-content: flex-start;
    height: 125px;
    align-items: center;
    @media only screen and (max-width:1375px){
        flex-wrap: wrap;
        height: auto;
        justify-content: flex-start;
    }
    
    &:hover {
        box-shadow: ${({theme}) => theme.boxshadows.boxshadow8};
    }
    cursor: pointer;
`

export const PersonCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 63px;
    /* height:93px;\ */
    margin-top: 10px;
    @media only screen and (max-width:1375px){
        flex-direction: row;
        width: 120px;
        height: auto;
        align-items: center;
        column-gap: 10px;
    }
`
export const Avatar = styled.img`
    width: 63px;
    height:63px;
    border-radius:50%;
    object-fit: cover;
    background-color: ${({theme}) => theme.backgrounds.background3};
    @media only screen and (max-width:1375px){
        width: 22px;
        height:22px;
    }

`
export const Name = styled.span`
    font-size: 12px;
    margin-top: 18px;
    display: flex;
    opacity: 0.62;
    height: auto;
    width: 120%;
    display: -webkit-box;
    line-height: 18px;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color:  ${({theme}) => theme.texts.text2};
    @media only screen and (max-width:1375px){
        margin: 0px;
    }
`
export const TextCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 535px;
    height: 100%;
    margin-left: 22px;
    @media only screen and (max-width:1375px){
        order:2;
        width: 100%;
    }
`

export const Title = styled.h2`
    font-size: 20px;
    color:  ${({theme}) => theme.titles.title2};
    cursor: pointer;
    text-transform: capitalize;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    line-height: 30px;
    font-family: s;
    letter-spacing: 0.2px;
`
export const Content = styled.p`
    font-size: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color:  ${({theme}) => theme.texts.text1};
    font-family: r;
    align-self: flex-start;
    line-height: 22px;
    margin-top: 2px;
`

export const BottomSide = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 14px;
    position: relative;
`

export const QuestionTags = styled.div`
    display: flex;
    column-gap: 10px;
`


export const Tags = styled.button`
    height: 22px;
    color: white;
    border: none;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    font-family: r;
    justify-content: center;
    /* border: 1px solid lightgray; */
    align-items: center;
    background-color: #e5f0f4;
    font-family: r;
    background:  ${({theme}) => theme.backgrounds.background4};
    cursor: pointer;
    font-size: 12px;
    text-align: center;
    transition: 10s ease-out ;
    color:  ${({theme}) => theme.texts.text4};
    box-shadow: ${({theme}) => theme.boxshadows.boxshadow6};
    &:hover{
        box-shadow: ${({theme}) => theme.boxshadow_hover.hover1};
    }
`
export const ProductsIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProductIcon = styled.div<ProductIconProps>`
    width: 18px;
    height: 18px;
    box-shadow: 0px 1px 2px rgba(99,105,108,1), inset 0px 0px 0px rgba(99,105,108,0.61);
    border-radius: 50%;
    background-color: ${({backgroundColor}) =>  backgroundColor};
    color:  ${({theme}) => theme.texts.text2};
    position: absolute;
    margin-right: ${({index}) => (index * 15)}px;
`

export const CountOfProducts = styled.div`
    display: flex;
    column-gap: 10px;
    align-items: center;
    position: absolute;
    right: 0px;
    top: -2px;
    /* margin-top: 2px; */
`
export const ProductCount = styled.button`
    font-family: r;
    font-size: 15px;
    line-height: 20px;
    text-decoration: none solid rgb(71, 77, 81);
    color: ${({theme}) => theme.titles.title2};
    background-color: transparent;
    span 
    {
        color: ${({theme}) => theme.titles.title2};
        font-size: 16px;
        font-family: m;
        text-decoration: none solid ${({theme}) => theme.titles.title2};
        background-color: transparent;
    }
`



export const StatisticCont = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    /* width: 95px; */
    column-gap: 5px;
    row-gap:12px;
    box-sizing: border-box;
    @media only screen and (max-width:1375px){
        flex-direction: row;
        column-gap: 10px;
        width:180px;
        justify-content:flex-start;
    }

`
export const QuestionStatisticPercentage = styled.span`
    font-size: 15px;
    line-height: 22px;
    width:30px;
    text-align: center;
`

export const AnswerCont = styled.div`
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 0px;
    @media only screen and (max-width:1375px){
        flex-direction: row;
        column-gap: 10px;
        width: auto;
    }
`

export const AnswerCount = styled.div`
    width: 40px;
    /* height: 20px; */
    line-height: 30px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:${({theme}) => theme.texts.text2};
    font-size:20px;
`

export const Text = styled.span`
    font-size: 12px;
    line-height:14px;
    color:${({theme}) => theme.texts.text2};
    margin-top: -2px;

`
export const ThumbIcon = styled.span`
    font-size: 13px;
    color:${({theme}) => theme.texts.text2};
    font-size: 18px;
`




export const HelpfulCont = styled.div`
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
    @media only screen and (max-width:1375px){
        flex-direction: row;
        column-gap: 10px;
        width: auto;
    }
`

export const HelpfulCount = styled.div`
    /* width: 100%; */
    height: auto;
    color: ${({theme}) => theme.texts.text2};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 6px;
`


export const DefaultLine = styled.div`
    width: 76px;
    height: 1.5px;
    background-color: rgba(0,0,0);
    @media only screen and (max-width:1375px){
        display: none;
    }
`

export const PercentageLine = styled.div<PercentageLineProps>`
    width: ${({percentage}) => percentage}%;
    height: 100%;
    background-color:${({theme}) => theme.texts.text3};
    @media only screen and (max-width:1375px){
        display: none;
    }
`

export const ViewsCont = styled.div`
`

export const DateCount = styled.p`
    font-family: r;
    font-style: italic;
    font-size: 12px;
    color: ${({theme}) => theme.texts.text3};
    line-height: 18px;
`
